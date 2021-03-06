import React from 'react';
import './App.css';
import about from './about';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import mainPage from './MainPage';
import contacts from './contacts';
import Tours from './Tours';
import home from './Home';
import thankyou from './thankyou';
import Footer from './Footer';
import Payment from './Payment';
import Register from './Register';
import deals from './deals';
import trip from './trip';
import Book from './Book';
import UserList from './UserList';
import Admin from './Admin';
import ConfirmBooking from './ConfirmBooking';


function App() {
  return (
    <div className="App" >
      <div className="App-logo" >
        <Router>
          <Switch>
            <Route exact path="/" component={mainPage} />
            <Route path="/about" component={ about } />
            <Route path="/contacts" component={ contacts } />
            <Route path="/Tours" component={ Tours } />
            <Route path="/Home" component={ home } />
            <Route path="/thankyou" component={ thankyou } />
            <Route path="/Payment" component={ Payment } />
            <Route path="/Register" component={ Register } />
            <Route path="/deals" component={ deals } />
            <Route path="/trip" component={ trip } />
            <Route path="/Book" component={ Book } />
             <Route path="/UserList" component={ UserList } />
            <Route path="/Admin" component={ Admin } />
            <Route path="/ConfirmBooking" component={ ConfirmBooking }/>
          </Switch>
        </Router>
         <Footer/>
      </div>
     

    </div>
  );
}

export default App;
