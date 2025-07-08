import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/api';

export const fetchIndustryData = createAsyncThunk('charts/fetchIndustryData', async () => {
  const res = await API.get('/account-industry');
  return res.data;
});

export const fetchTeamData = createAsyncThunk('charts/fetchTeamData', async () => {
  const res = await API.get('/team');
  return res.data;
});

export const fetchCustomerData = createAsyncThunk('charts/fetchCustomerData', async () => {
  const res = await API.get('/customer-type');
  return res.data;
});

export const fetchAcvData = createAsyncThunk('charts/fetchAcvData', async () => {
  const res = await API.get('/acv-range');
  return res.data;
});
