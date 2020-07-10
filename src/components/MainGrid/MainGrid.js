import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalCards from '../GlobalCards/GlobalCards';
import CountryCards from '../CountryCards/CountryCards';
import Chart from '../Chart/Chart';
import CountryPicker from '../CountryPicker/CountryPicker';
import  styles from './MainGrid.module.css';
import covidimg from '../../images/cimg.png';

// import { fetchData } from '../../api';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid( { data, handleCountryChange, country }) {
  // console.log(data);
  const classes = useStyles();

  // let state = {
  //   data: {},
  //   country: '',
  // }
  //console.log(handleCountryChange);
  
    

  // async componentDidMount() {
  //   const fetchedData = await fetchData();
    
  //   this.setState({ data: fetchedData })
  // }

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className = {styles.g1}>
        <Grid item xs = {12}>
        <img className={styles.image} src={covidimg} alt='Covid-19' />
        </Grid>
        <Grid item xs = {12} lg = {10}>
          <Paper className={classes.paper}><CountryCards data={data} />
          <CountryPicker handleCountryChange = {handleCountryChange} /> 
          <Chart data= {data} country = {country} />
          </Paper>
        </Grid>
        <Grid item xs = {12} lg = {2}>
          <Paper className={classes.paper}><GlobalCards /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}