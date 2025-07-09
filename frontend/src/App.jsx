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
import Loader from './components/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { industry, team, acv, customer, loading } = useSelector((state) => state.charts);
  // All the JSON data are being fetched on mount.
  useEffect(() => {
    dispatch(fetchIndustryData());
    dispatch(fetchTeamData());
    dispatch(fetchCustomerData());
    dispatch(fetchAcvData());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Typography variant='h4' gutterBottom>
          Company Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* ChartCard component has two type of chats configed bar & doughnut.
        It is configed in such a way that it can handle any JSON data provided for assignement. */}
          <ChartCard title='Industry Data' data={industry} type='bar' uniqueKey='Acct_Industry' />
          <ChartCard title='Team Data' data={team} type='doughnut' uniqueKey='Team' />
          <ChartCard title='ACV Range' data={acv} type='bar' uniqueKey='ACV_Range' />
          <ChartCard title='Customer Type' data={customer} type='doughnut' uniqueKey='Cust_Type' />
        </Grid>
      </Container>
      <Loader open={loading} />
    </>
  );
};
export default App;
