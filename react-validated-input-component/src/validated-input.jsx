import React from 'react';

export default class Validated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const value = this.state.password;
    if (value === '') {
      return <form>
        Password <br />
        <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}>
        </input> <i className="fa-solid fa-x"></i> <br/>
        <p>A password is required.</p>
      </form>;
    } else if (value.length < 9) {
      return <form>
        Password <br />
        <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}>
        </input> <i className="fa-solid fa-x"></i> <br />
        <p>Your password is too short.</p>
      </form>;
    } else {
      if (value.includes('0') || value.includes('1') || value.includes('2') || value.includes('3') || value.includes('4') || value.includes('5') || value.includes('6') ||
         value.includes('7') || value.includes('8') || value.includes('9')) {
        if (value.includes('!') || value.includes('@') || value.includes('#') || value.includes('$') || value.includes('%') || value.includes('^') || value.includes('&') ||
          value.includes('*') || value.includes('(') || value.includes(')')) {
          return (
        <form>
          Password <br />
          <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}>
          </input> <i className="fa-solid fa-check"></i> <br />
        </form>
          );
        }
      }
      return (
        <form>
          Password <br />
          <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}>
          </input> <i className="fa-solid fa-x"></i> <br />
          <p>Your password requires number/special character(!, @, #, $, %, ^, &, *, (, or ))</p>
        </form>
      );
    }
  }
}
