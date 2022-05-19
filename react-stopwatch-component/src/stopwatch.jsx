import React from 'react';

export default class stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pause',
      number: 0
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    this.start = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);
    this.setState({ status: 'playing' });
  }

  pause() {
    clearInterval(this.start);
    this.setState({ status: 'pause' });
  }

  reset() {
    this.setState({ number: 0 });
  }

  render() {
    const currentStatus = this.state.status;
    const number = this.state.number;
    if (currentStatus === 'pause') {
      return <div onClick = {this.reset}className="container"><div className="font">{number}</div>
        <i onClick={this.play} className="fa-solid fa-play fa-5x"></i>
      </div>;
    }
    if (currentStatus === 'playing') {
      return <div className="container"><div className="font">{number}</div>
          <i onClick = {this.pause} className="fa-solid fa-pause fa-5x"></i>
        </div>;
    }
  }
}
