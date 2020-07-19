import React, { Component } from 'react';
import classes from './contacts.module.css';
import ContactComponent from './ContactComponent';
import ContactHeader from './ContactHeader';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import thankyou from './thankyou';
class contacts extends Component {
    state = {
        firstName: "",
        lastName: "",
        subject: "",
        show: false
    }

    inputHandler = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handsleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/thankyou');
    }

    showModal = () => {
        this.setState({ show: true });
    }

    closeModal = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div>
                <ContactHeader />
                <ContactComponent
                    clicked={this.inputHandler}
                    click={this.handsleSubmit}
                    showModal={this.showModal}
                    closeModal={this.closeModal}
                    {...this.state} />

            </div>

        );
    }
}

export default withRouter(contacts) 