import React from 'react';
import mountain from './mountain.jpeg';
import forest from './forest.jpeg';
import snow from './snow.jpeg';
import classes from './Home.module.css';
import Header from './Header';
import { Link } from 'react-router-dom';

const AboutHome = () => {
  return (
    <div className={classes.div}>
      <h2 className={classes.heading}>Wonderful Experiences</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src={forest} alt="forest" style={{ width: "100%" }} />
            <div className={classes.container}>
              <h2 className={classes.titles}>RainForest Walks</h2>
              <p className={classes.title}>Hat Head National Park</p>
              <p className={classes.title}>A delightful stroll through rare coastal rainforest, this short track is a great way to introduce the kids to the joys of wildlife-spotting and birdwatching.</p>
              <p className={classes.title}>Distance : 2km return</p>
              <p className={classes.title}>Entry Fees : Park entry fees apply</p>
              <p> <Link to ="/Payment"><button className={classes.button}>Book</button></Link></p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src={mountain} alt="mountain" style={{ width: "100%" }} />
            <div className={classes.container}>
              <h2 className={classes.titles}>Hiking</h2>
              <p className={classes.title}>Overland Track, Tasmania</p>
              <p className={classes.title}>A delightful stroll through rare coastal rainforest, this short track is a great way to introduce the kids to the joys of wildlife-spotting and birdwatching.</p>
              <p className={classes.title}>Distance : 1000km return</p>
              <p className={classes.title}>Entry Fees : Park entry fees apply</p>
              <p> <Link to ="/Payment"><button className={classes.button}>Book</button></Link></p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src={snow} alt="snow" style={{ width: "100%" }} />
            <div className={classes.container}>
              <h2 className={classes.titles}>Camping in Snow</h2>
              <p className={classes.title}>Snowny Mountains</p>
              <p className={classes.title}>A delightful stroll through rare coastal rainforest, this short track is a great way to introduce the kids to the joys of wildlife-spotting and birdwatching.</p>
              <p className={classes.title}>Distance : 5000km return</p>
              <p className={classes.title}>Entry Fees : Park entry fees apply</p>
              <p> <Link to ="/Payment"><button className={classes.button}>Book</button></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutHome