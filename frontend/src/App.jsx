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
  const { industry, team, acv, customer, loading } = useSelector((state) => state.charts);

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
        <ChartCard
          title='Industry Data'
          data={industry}
          type='bar'
          uniqueKey='Acct_Industry'
          loading={loading}
        />
        <ChartCard
          title='Team Data'
          data={team}
          type='doughnut'
          uniqueKey='Team'
          loading={loading}
        />
        <ChartCard
          title='ACV Range'
          data={acv}
          type='bar'
          uniqueKey='ACV_Range'
          loading={loading}
        />
        <ChartCard
          title='Customer Type'
          data={customer}
          type='doughnut'
          uniqueKey='Cust_Type'
          loading={loading}
        />
      </Grid>
    </Container>
  );
};
export default App;
