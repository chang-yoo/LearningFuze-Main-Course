import React from 'react';

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'off' };
    this.message = 'off';
    this.switchOn = this.switchOn.bind(this);
    this.switchOff = this.switchOff.bind(this);
  }

  switchOn() {
    this.setState({ status: 'on' });
    this.message = 'on';
  }

  switchOff() {
    this.setState({ status: 'off' });
    this.message = 'off';
  }

  render() {
    if (this.state.status === 'on') {
      return <div className="on"><button className="onbox" onClick={this.switchOff}>switch</button>{this.message}</div>;
    }
    return <div className="off"><button className="offbox" onClick={this.switchOn}>switch</button>{this.message}</div>;
  }
}
