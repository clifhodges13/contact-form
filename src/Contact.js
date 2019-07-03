import React, { Component } from 'react';
import axios from 'axios';

import './Contact.css';

const API_PATH = 'http://localhost:3000/event-planner/api/src/index.php';

class Contact extends Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
    .then(result => { this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({
        error: error.message
      })
    );
  }

  render() {
    return (
      // <div className="Form-container">
      //   <form className="form" id="form" onSubmit={this.handleSubmit}>
      //     <label>
      //       <input id="name" type="text" placeholder="Name" ref={input => (this.input = input)} />
      //     </label>
      //     <label>
      //       <input id="email" type="email" placeholder="Email" ref={input => (this.input = input)} />
      //     </label>
      //     <label>
      //       <textarea id="message" name="message" placeholder="Message" ref={input => (this.input = input)} />
      //     </label>
      //     <input type="submit" value="Submit" />
      //   </form>
      // </div>
        <div className="Form-container">
          <form className="form" action="#" >
            <h1>Contact Us</h1>
            <input type="text"
              id="name"
              name="name"
              placeholder="Name" 
              value={this.state.name}
              onChange={e => this.setState({
                  name: e.target.value
                })
              } />

            <input type="email"
              id="email"
              name="email"
              placeholder="Email" 
              value={this.state.email}
              onChange={e => this.setState({
                  email: e.target.value
                })
              } />

            <textarea id="subject"
              name="subject"
              placeholder="Message"
              onChange={e => this.setState({
                  message: e.target.value
                })
              }
              value={this.state.message}>
            </textarea> 

            <input type="submit"
                value="Submit"
                onClick={e => this.handleSubmit(e)} />

            <div>
              {this.state.mailSent && 
                <div>Thanks for reaching out! We'll be in touch soon!</div>
              }
            </div>
          </form>
        </div>
      );
    }
  }
  
export default Contact