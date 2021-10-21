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
            reason : '',
            status : '',
            rep : ''
        }
    }
    sendEmail = (event) => {
        event.preventDefault();

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

    handleRepChange = (event) => {
        this.setState ({
            rep : event.target.value
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
        const { name, message, email, reason } = this.state;
        const enabled =
            name.trim().length > 0 &&
            message.trim().length > 0 &&
            email.trim().length > 0 &&
            reason.trim().length > 0;
        return (
            <form onSubmit={this.sendEmail}>
                <div className="top-row-form">
                    <div className="form-input">
                        <input type='text' value={this.state.name} onChange={this.handleNameChange} name="from_name" placeholder="Full Name"/>
                    </div>
                    <div className="form-input">
                        <input type='text' value={this.state.email} onChange={this.handleEmailChange} name="from_email" placeholder="Email"/>
                    </div>
                </div>
                <div className="mid-row-form">
                    <div className="reason">
                        <input type='text' value={this.state.reason} onChange={this.handleReasonChange} name="reason" placeholder="Subject"/>
                    </div>
                    <div className="rep">
                        <input type='text' value={this.state.rep} onChange={this.handleRepChange} name="rep" placeholder="Representing(not required)"/>
                    </div>
                </div>
                <div className="bottom-row-form">
                    <div className="form-input">
                        <textarea value={this.state.message} onChange={this.handleMessageChange} name="message" placeholder="Your Message"/>
                    </div>
                </div>
                <div>
                    <button disabled={!enabled} className='submit-button' type="submit">Send Your Message</button>
                </div>
                <div className='status'>{this.state.status}</div>
            </form>
        );
    }
}

export default Form;