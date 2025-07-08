import { createSlice } from '@reduxjs/toolkit';
import { fetchIndustryData, fetchTeamData, fetchCustomerData, fetchAcvData } from './chartsAPI';

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    industry: [],
    team: [],
    customer: [],
    acv: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndustryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIndustryData.fulfilled, (state, action) => {
        state.industry = action?.payload?.data;
        state.loading = false;
      })
      .addCase(fetchIndustryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })

      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.team = action?.payload?.data;
      })

      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.customer = action?.payload?.data;
      })

      .addCase(fetchAcvData.fulfilled, (state, action) => {
        state.acv = action?.payload?.data;
      });
  },
});

export default chartsSlice.reducer;
