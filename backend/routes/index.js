import express from 'express';
import Utility from '../utilities/index.js';
const router = express.Router();
const { loadJSON, handleAPIError } = Utility;

// Data routes
router.get('/account-industry', (req, res) => {
  try {
    const data = loadJSON('Account Industry.json');
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'Account Industry.json');
  }
});

router.get('/acv-range', (req, res) => {
  try {
    const data = loadJSON('ACV Range.json');
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'ACV Range.json');
  }
});

router.get('/customer-type', (req, res) => {
  try {
    const data = loadJSON('Customer Type.json');
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'Customer Type.json');
  }
});

router.get('/team', (req, res) => {
  try {
    const data = loadJSON('Team.json');
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'Team.json');
  }
});

export default router;
