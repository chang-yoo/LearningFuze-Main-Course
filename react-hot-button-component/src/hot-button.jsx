import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.count = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
    this.count++;
  }

  render() {
    if (this.state && this.count < 4) {
      return <div> <button className= 'purple' onClick={this.handleClick}>Hot Button</button> {this.count} click</div>;
    } else if (this.state && this.count < 7) {
      return <div> <button className='orchid' onClick={this.handleClick}>Hot Button</button> {this.count} click</div>;
    } else if (this.state && this.count < 10) {
      return <div> <button className='red' onClick={this.handleClick}>Hot Button</button> {this.count} click</div>;
    } else if (this.state && this.count < 13) {
      return <div> <button className='orange' onClick={this.handleClick}>Hot Button</button> {this.count} click</div>;
    } else if (this.state && this.count < 18) {
      return <div> <button className='yellow' onClick={this.handleClick}>Hot Button</button> {this.count} click</div>;
    } else if (this.state && this.count >= 18) {
      return <div> <button className='white' onClick={this.handleClick}>Hot Button</button> {this.count} click</div>;
    }
  }
}
