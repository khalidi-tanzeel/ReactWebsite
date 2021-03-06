import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import classes from './contacts.module.css';
import Header from './Header';
import "@reach/dialog/styles.css";
import destination from './destination.jpeg';

const Admin = () => {
  
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const history = useHistory();
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  }
  

  const handleLoginSubmit = (e) => {
    let hardcodedCred = {
      email: 'admin@gmail.com',
      password: '123456',
     
    }

    if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = '123456abcdef';
      sessionStorage.setItem('auth-token', token);

      //go to www.website.com/todo
      history.push('/Book');
    } else {
      //bad combination
      alert('Please enter the Admin Credentials');
    }
  }
  return (

    <div className={classes.contact}>
      <Header />
      <div className={classes.container}>
        <div style={{ textAlign: "center" }}>
          <h2>Admin Mode</h2>
          <h3>SignIn, with the admin credentials</h3>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <img src={destination} style={{ width: '100%' }} />
          </div>
          <div className={classes.column}>
                <form onSubmit={handleLoginSubmit} >


                  <label for="lname"><b>Email Address</b></label>
                  <input className={classes.contacts}
                    type="email" id="lname"
                    name="lastName"
                    value={emailInput}
                    onChange={handleEmailChange}
                    required
                    placeholder="Your Email Address.." />

                  <label for="psw" className={classes.div}><b>Password</b></label>
                  <input type="password" className={classes.contacts} placeholder="*****" pattern="[0-9]+" maxlength="6" name="psw" value={passwordInput}
                    onChange={handlePasswordChange} required />
                  
                  <br />
                  <br />
                  <input className={classes.contacts} type="submit" value="Continue" />
                </form>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Admin
