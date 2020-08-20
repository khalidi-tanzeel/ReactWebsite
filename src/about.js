import React from 'react';
import classes from './about.module.css';
import Pic from './Pic.jpeg';
import team from './team.jpeg';
import AboutHeader from './AboutHeader';
import marvel from './marvel.jpeg';


const about = () => {
  return (
    <div className = { classes.div }>
      <AboutHeader />
      <div className = { classes.aboutsection }>
        <h1>About Happy Tour</h1>
        <p>AN EMPLOYEE-OWNED, AWARD-WINNING TRAVEL AGENCY.</p>
              Since 1975, TravelStore has been committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders on the leisure travel side, and providing corporate travelers hi-touch services to facilitate their business travel needs.
              We’re an employee-owned travel agency anchored by our values, integrity and dedication to customer service. Our award-winning company consistently ranks as one of the best agencies in the country (Travel Weekly, Business Travel Weekly), and is a top member of the prestigious Signature Travel Network, a worldwide partnership allowing us to provide our customers unmatched benefits.
              Since 2009, our strong company culture and passion for our profession has resulted in our being named each year as one of the "Best Places To Work" in Los Angeles County. Our management is active on various travel advisory boards and committees for travel organizations, travel magazines (Afar, Travel+Leisure), major hotel brands, and more. TravelStore is a Premium Member of ASTA (American Society of Travel Advisors),
              as well as an ASTA Green Member agency, and CLIA (Cruise Line International Association).
          </div>
      <h2 className={classes.heading}>About Wonderful Team</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src={Pic} alt="Tanzeel" style={{ width: "100%" }} />
            <div className={classes.container}>
              <h2 className={classes.titles}>Tanzeel Khalidi</h2>
              <p className={classes.title}>Manager</p>
              <p className={classes.title}>I started this company when I was young. This is my dream company and It makes me happy</p>
              <p className={classes.title}>#Coder</p>
              <p className={classes.title}>tanzeelrahim@gmail.com</p>
              <p><button className={classes.button}>Contact</button></p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src={team} alt="Zulkfil" style={{ width: "100%" }} />
            <div className={classes.container}>
              <h2 className={classes.titles}>Z Siblings</h2>
              <p className={classes.title}>CEO & Founder</p>
              <p className={classes.title}>I started this company when I was young. This is my dream company and It makes me happy</p>
              <p className={classes.title}>#CoolKids</p>
              <p className={classes.title}>zsiblins@gmail.com</p>
              <p><button className={classes.button}>Contact</button></p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src={marvel} alt="Marvel" style={{ width: "100%" }} />
            <div className={classes.container}>
              <h2 className={classes.titles}>Thanos</h2>
              <p className={classes.title}>CFO</p>
              <p className={classes.title}>I started this company when I was young. This is my dream company and It makes me happy</p>
              <p className={classes.title}>#PowerGod</p>
              <p className={classes.title}>Thanos@gmail.com</p>
              <p><button className={classes.button}>Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default about
