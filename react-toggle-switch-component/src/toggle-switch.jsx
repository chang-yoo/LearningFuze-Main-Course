import React from 'react';

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'off' };
    this.switchOn = this.switchOn.bind(this);
    this.switchOff = this.switchOff.bind(this);
  }

  switchOn() {
    this.setState({ status: 'on' });
  }

  switchOff() {
    this.setState({ status: 'off' });
  }

  render() {
    const toggle = this.state.status;
    if (toggle === 'on') {
      return <div className="on"><button className="onbox" onClick={this.switchOff}>switch</button>On</div>;
    }
    return <div className="off"><button className="offbox" onClick={this.switchOn}>switch</button>Off</div>;
  }
}
