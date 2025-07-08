import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchIndustryData,
  fetchTeamData,
  fetchCustomerData,
  fetchAcvData,
} from './features/charts/chartsAPI';
import { Container, Grid, Typography } from '@mui/material';
import ChartCard from './components/ChartCard';

const App = () => {
  const dispatch = useDispatch();
  const { industry, team, acv, customer } = useSelector((state) => state.charts);

  useEffect(() => {
    dispatch(fetchIndustryData());
    dispatch(fetchTeamData());
    dispatch(fetchCustomerData());
    dispatch(fetchAcvData());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Company Dashboard
      </Typography>
      <Grid container spacing={3}>
        <ChartCard title='Industry Data' data={industry} type='bar' />
        <ChartCard title='Team Data' data={team} type='doughnut' />
        <ChartCard title='ACV Range' data={acv} type='bar' />
        <ChartCard title='Customer Type' data={customer} type='bar' />
      </Grid>
    </Container>
  );
};
export default App;
