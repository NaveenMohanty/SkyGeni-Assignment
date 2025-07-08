import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility function to load JSON file with error handling
const loadJSON = (filename) => {
  try {
    const filePath = path.join(__dirname, '../data', filename);

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filename}`);
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error.message);
    throw error;
  }
};

// Generic error handler for API endpoints
const handleAPIError = (res, error, filename) => {
  console.error(`API Error for ${filename}:`, error.message);

  if (error.code === 'ENOENT' || error.message.includes('File not found')) {
    return res.status(404).json({
      error: 'File not found',
      message: `The requested data file (${filename}) could not be found.`,
      success: false,
    });
  }

  if (error instanceof SyntaxError) {
    return res.status(500).json({
      error: 'Invalid JSON format',
      message: `The data file (${filename}) contains invalid JSON.`,
      success: false,
    });
  }

  return res.status(500).json({
    error: 'Internal server error',
    message: 'An unexpected error occurred while processing your request.',
    success: false,
  });
};

export default { loadJSON, handleAPIError };
