import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/api';

export const fetchIndustryData = createAsyncThunk(
  'charts/fetchIndustryData',
  async (fiscal_quarter = 'all') => {
    const res = await API.get(`/account-industry?${new URLSearchParams({ fiscal_quarter })}`);
    return res.data;
  }
);

export const fetchTeamData = createAsyncThunk(
  'charts/fetchTeamData',
  async (fiscal_quarter = 'all') => {
    const res = await API.get(`/team?${new URLSearchParams({ fiscal_quarter })}`);
    return res.data;
  }
);

export const fetchCustomerData = createAsyncThunk(
  'charts/fetchCustomerData',
  async (fiscal_quarter = 'all') => {
    const res = await API.get(`/customer-type?${new URLSearchParams({ fiscal_quarter })}`);
    return res.data;
  }
);

export const fetchAcvData = createAsyncThunk(
  'charts/fetchAcvData',
  async (fiscal_quarter = 'all') => {
    const res = await API.get(`/acv-range?${new URLSearchParams({ fiscal_quarter })}`);
    return res.data;
  }
);
