import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';
import axios from 'axios';
import { fetchDataG } from '../../api';

import styles from "./GlobalCards.module.css";

const url = 'https://covid19.mathdro.id/api';



// useEffect(async () => {
//   try {
//     const { data: { confirmed, recovered, deaths } } = await axios.get(url);

//     return setData({ confirmed, recovered, deaths });
//   } catch (error) {}
// })
// fetchData();





const GlobalCards = ({/*data: { confirmed, recovered, deaths, lastUpdate }*/}) => {

  const [ globalData, setGlobalData] = useState();

  useEffect(() => {
    async function fetchGlobalData() {
      const apiResponse = await fetch(url)
      console.log(apiResponse);
      const dataFromAPI = await apiResponse.json();
      console.log(dataFromAPI);
      setGlobalData(dataFromAPI);
    }
  fetchGlobalData();
  },[]);
  console.log(globalData);
  console.log(globalData);


  // const [ dataG, setDataG ] = useState();
  // useEffect(()=>{ 
  //   const fetchedDataG = async () => {
  //     setDataG(await fetchData());
  //   }

  // },[]);


  // async componentDidMount() {
  //   const fetchedData = await fetchData();
    
  //   this.setState({ data: fetchedData })
  // }

  
  // if(!confirmed) {
  //   return 'Loading...';
  // }
  // console.log(confirmed);
  const confirmed = globalData && globalData.confirmed && globalData.confirmed.value
  const recovered = globalData && globalData.recovered && globalData.recovered.value
  const deaths = globalData && globalData.deaths && globalData.deaths.value
  const lastUpdate = (globalData && globalData.lastUpdate)
  const lastUpdate2 = new Date(lastUpdate).toDateString()
  console.log(recovered)


  if(!confirmed) {
    return 'Loading...';
  }
  
  return (
    <div className={styles.container}>
      <Typography variant="h6">
        Worldwide Statistics
      </Typography>
      <Grid container spacing={0}>
        <Grid item component={Card} xs={12} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
            {/* <CountUp start={0} end={confirmed} duration={1.25} seperator= "," /> */}
            {/* {globalData && globalData.confirmed && globalData.confirmed.value} */}
            {confirmed}
            </Typography>
            <Typography color="textSecondary">{lastUpdate2}</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
            {/* <CountUp start={0} end={recovered} duration={1.25} seperator= "," /> */}
            {recovered}
            </Typography>
            <Typography color="textSecondary">{lastUpdate2}</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
            {/* <CountUp start={0} end={deaths.value} duration={1.25} seperator= "," /> */}
            {deaths}
            </Typography>
            <Typography color="textSecondary">{lastUpdate2}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default GlobalCards;