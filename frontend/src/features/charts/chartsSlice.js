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
    // All three stages of api call is handled here and in fulfilled stage the data are stored to state.
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
        state.loading = true;
        state.error = action?.error?.message;
      })

      .addCase(fetchTeamData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.team = action?.payload?.data;
        state.loading = false;
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })

      .addCase(fetchCustomerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.customer = action?.payload?.data;
        state.loading = false;
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })

      .addCase(fetchAcvData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAcvData.fulfilled, (state, action) => {
        state.acv = action?.payload?.data;
        state.loading = false;
      })
      .addCase(fetchAcvData.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      });
  },
});

export default chartsSlice.reducer;
