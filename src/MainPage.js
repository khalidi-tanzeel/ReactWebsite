import React , {Component} from 'react';
import MainComponent from './MainComponent';
import { withRouter } from 'react-router-dom';
import Register from './Register';

class mainPage extends Component {

  state = {
    name : ""
  }

inputHandler = (event) =>{
  this.setState ({
    name : event.target.value
  })
}

  handsleSubmit = (event) => {
   // event.preventDefault();
    this.props.history.push('/Register');
}
  render(){
    return(<div>
      <MainComponent
      click = {this.handsleSubmit}
      clicked = {this.inputHandler}
      {...this.state}/>
    </div>);
  }
}




export default withRouter(mainPage)