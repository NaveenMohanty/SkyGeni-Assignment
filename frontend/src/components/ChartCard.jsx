import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { DoughnutChart, BarChart } from './Charts';

const ChartCard = ({ title, data, type }) => {
  return (
    <Grid item >
      <Card>
        <CardContent>
          <Typography variant='h6'>{title}</Typography>
          {type === 'bar' && <BarChart data={data} />}
          {type === 'doughnut' && <DoughnutChart data={data} />}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ChartCard;
