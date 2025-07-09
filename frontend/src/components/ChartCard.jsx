import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { DoughnutChart, BarChart } from './Charts';
import { useDispatch } from 'react-redux';
import {
  fetchAcvData,
  fetchCustomerData,
  fetchIndustryData,
  fetchTeamData,
} from '../features/charts/chartsAPI';

const ChartCard = ({ title, data, type, uniqueKey, loader }) => {
  const [selectedQuarter, setSelectedQuarter] = useState('all');
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    setSelectedQuarter(event.target.value);
    if (uniqueKey === 'Acct_Industry') {
      dispatch(fetchIndustryData(event.target.value));
    } else if (uniqueKey === 'Team') {
      dispatch(fetchTeamData(event.target.value));
    } else if (uniqueKey === 'Cust_Type') {
      dispatch(fetchCustomerData(event.target.value));
    } else if (uniqueKey === 'ACV_Range') {
      dispatch(fetchAcvData(event.target.value));
    }
  };
  if(loader)
    return (<Grid size={{ xs: 12, md: 6 }}><SkeletonLoader /></Grid>)
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card variant='outlined'>
        <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Grid
            container
            direction='row'
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 2,
              marginTop: -1,
              width: '100%',
            }}
          >
            <Grid size={6}>
              <Typography variant='h6'>{title}</Typography>
            </Grid>
            <Grid size={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FormControl variant='standard' sx={{ minWidth: 130 }}>
                <InputLabel id='demo-simple-select-standard-label'>Fiscal Quarters</InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={selectedQuarter}
                  onChange={handleSelect}
                  label='selectedQuarter'
                >
                  <MenuItem value='all'>All</MenuItem>
                  <MenuItem value='2023-Q3'>2023-Q3</MenuItem>
                  <MenuItem value='2023-Q4'>2023-Q4</MenuItem>
                  <MenuItem value='2024-Q1'>2024-Q1</MenuItem>
                  <MenuItem value='2024-Q2'>2024-Q2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {type === 'bar' && <BarChart data={data} uniqueKey={uniqueKey} />}
          {type === 'doughnut' && <DoughnutChart data={data} uniqueKey={uniqueKey} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ChartCard;
