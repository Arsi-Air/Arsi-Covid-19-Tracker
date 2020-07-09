import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from "./CountryCards.module.css";


const CountryCards = ( {data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={0} justify="center">
        <Grid item component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
            {/* <CountUp start={0} end={confirmed.value} duration={1.25} seperator= "," /> */}
            {confirmed.value}
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            {/*<Typography variant="body2">
              Number of active cases
            </Typography>*/}
          </CardContent>
        </Grid>

        <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
            {/* <CountUp start={0} end={recovered.value} duration={1.25} seperator= "." /> */}
            {recovered.value}
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
            {/* <CountUp start={0} end={deaths.value} duration={1.25} seperator= "," /> */}
            {deaths.value}
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryCards;