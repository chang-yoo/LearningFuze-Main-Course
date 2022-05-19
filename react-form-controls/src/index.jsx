import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Username
      <input type="text" onChange={this.handleUsernameChange}/>
      </label>
      <label>
        Password
        <input type="password"onChange={this.handlePasswordChange}/>
      </label>
      <button onChange={this.handleSubmit}>Sign UP</button>
    </form>;
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RegistrationForm/>);
