import React from 'react';
import contacts from './contacts';
import bus from './bus.jpeg';
import classes from './contacts.module.css';
import Modal from './UI/Modal';

const contact = (props) => {
  return (
    <div className={classes.contacts}>
      <div className={classes.container}>
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <img src={bus} style={{ width: '100%' }} />
          </div>
          <div className={classes.column}>
            <form onSubmit={props.click} >
              <label for="fname">First Name</label>
              <input className={classes.contacts}
                type="text" id="fname"
                name="firstName"
                required
                placeholder="Your name.."
                onChange={props.clicked}
                value={props.firstName} />

              <label for="lname">Last Name</label>
              <input className={classes.contacts}
                type="text" id="lname"
                name="lastName"
                onChange={props.clicked}
                value={props.lastName}
                required
                placeholder="Your last name.." />

              <label for="subject">Subject</label>
              <textarea className={classes.contacts} id="subject" name="subject" onChange={props.clicked}
                value={props.subject} placeholder="Write something.." required style={{ height: "170px" }} />
               <input onClick={props.showModal} className={classes.contacts} type="submit" value="Submit"/>
              <Modal show={props.show} modalClosed={props.hideModals} className={classes.center}>
                Hi User,
                Please fill out the form so we can make our service better for you as we are want to provide our best services to you.
                If you have any queries or you want to give us feedback or anything that you want to change then please let us know.
                <br/>

                <button onClick={props.closeModal} className={classes.submitb3}>Close</button>
              </Modal>
            </form>
          </div>
        </div>
      </div>

    </div>


  );
}

export default contact
