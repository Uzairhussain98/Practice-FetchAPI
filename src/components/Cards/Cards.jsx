import React from 'react'
import {Card ,Typography , Grid, CardContent} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'

const Cards = ({ data : {confirmed , recovered , deaths , lastUpdate}}) => {
  console.log(recovered);
  if(!confirmed){
    return 'Loading...'
  }
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid component={Card}>     
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp 
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
              />
              </Typography>
  <Typography color="textSecondary">Date Api Retuns undefined</Typography>
          <Typography variant="body2">Number Of Infected Patient </Typography>



        </CardContent>
        
        </Grid>

        <Grid component={Card}>     
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">
              <CountUp  
              start={0} 
               end={recovered.value}
            duration={2.5}
              separator=","/>
              </Typography>
  <Typography color="textSecondary" >real Date</Typography>
          <Typography variant="body2">Number Of Recovered Patient </Typography>



        </CardContent>
        
        </Grid>


        <Grid component={Card}>     
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5">
              <CountUp 
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
              />
              </Typography>          <Typography color="textSecondary" >Real Date</Typography>
          <Typography variant="body2">Number Of Deaths from Covid19</Typography>



        </CardContent>
        
        </Grid>







      
      </Grid>
    </div>
  )
}

export default Cards;
