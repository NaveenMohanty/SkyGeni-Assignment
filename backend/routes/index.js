import express from 'express';
import Utility from '../utilities/index.js';
import { filterFiscalQuarter } from '../helper/index.js';
const router = express.Router();
const { loadJSON, handleAPIError } = Utility;

// Data routes to fetch JSON data from .json files
router.get('/account-industry', (req, res) => {
  try {
    const fiscal_quarter = req.query.fiscal_quarter || 'all';
    let data = loadJSON('Account Industry.json');
    data = filterFiscalQuarter(data, fiscal_quarter);
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'Account Industry.json');
  }
});

router.get('/acv-range', (req, res) => {
  try {
    const fiscal_quarter = req.query.fiscal_quarter || 'all';
    let data = loadJSON('ACV Range.json');
    data = filterFiscalQuarter(data, fiscal_quarter);
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'ACV Range.json');
  }
});

router.get('/customer-type', (req, res) => {
  try {
    const fiscal_quarter = req.query.fiscal_quarter || 'all';
    let data = loadJSON('Customer Type.json');
    data = filterFiscalQuarter(data, fiscal_quarter);
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'Customer Type.json');
  }
});

router.get('/team', (req, res) => {
  try {
    const fiscal_quarter = req.query.fiscal_quarter || 'all';
    let data = loadJSON('Team.json');
    data = filterFiscalQuarter(data, fiscal_quarter);
    res.json({ data, success: true });
  } catch (error) {
    handleAPIError(res, error, 'Team.json');
  }
});

export default router;
