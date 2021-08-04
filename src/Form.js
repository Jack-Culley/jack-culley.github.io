import React from 'react';
import emailjs from "emailjs-com";
import './index.css';
import ReactDOM from 'react-dom';

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name : '',
            message : '',
            email : '',
            reason : 'select one',
            status : '',
        }
    }
    sendEmail = (event) => {
        event.preventDefault();

        let status;

            emailjs.sendForm('service_t3uxmoj', 'template_3bhou6t', event.target, 'user_f5pMFS9fQDASFFnpbD5bk')
              .then((result) => {
                  console.log(result.text);
                  this.setState({
                    status : 'Form sent successfully'
                  });
              }, (error) => {
                  console.log(error.text);
                  this.setState({
                     status : 'Error sending form'
                  });
              });
              event.target.reset();
    }

    handleNameChange = (event) => {
        this.setState ({
            name : event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState ({
            message : event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState ({
            email: event.target.value
        })
    }

    handleReasonChange = (event) => {
        this.setState ({
            reason : event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.sendEmail}>
                <div>
                    <label>Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleNameChange} name="from_name"/>
                </div>
                <div>
                    <label>Your Message</label>
                    <textarea value={this.state.message} onChange={this.handleMessageChange} name="message"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmailChange} name="from_email"/>
                </div>
                <div>
                    <label>Reason for contact</label>
                    <select value={this.state.reason} onChange={this.handleReasonChange} name="reason">
                        <option value='select one'>Select one</option>
                        <option value='inquiry'>Inquiry</option>
                        <option value='business'>Business</option>
                        <option value='fun'>For Fun</option>
                    </select>
                <button type="submit">Submit</button>
                    <div>{this.state.status}</div>
                </div>
            </form>
        );
    }
}

export default Form;