import React , {Component} from "react";
import { Dialog } from "@reach/dialog";
import classes from "./Confirm.module.css";

class ConfirmStatusChange extends Component {
  state = {
    open: false,
  }

  show = callback => event => {
    event.preventDefault()

    event = {
      ...event,
      target: { ...event.target, value: event.target.value }
    }

    this.setState({
      open: true,
      callback: () => callback(event)
    })
  }

  hide = () => this.setState({ open: false, callback: null })

  confirm = () => {
    this.state.callback()
    this.hide()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.show)}

        {this.state.open && (
          <Dialog className={classes.confirm}>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>

            <button className={classes.button} onClick={this.hide}>Edit</button>
            <button className={classes.button} onClick={this.confirm}>Submit</button>
          </Dialog>
        )}
      </React.Fragment>
    )
  }
}

export default ConfirmStatusChange