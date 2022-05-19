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
    // console.log(this.state.password);
  }

  render() {
    // const value = this.state.password;
    return <form>
      Password <br/>
      <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}>
      </input>
    </form>;
  }
}
