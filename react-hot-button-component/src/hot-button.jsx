import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const clicked = this.state.count;
    if (clicked < 4) {
      return <button className= 'purple' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 7) {
      return <button className='orchid' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 10) {
      return <button className='red' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 13) {
      return <button className='orange' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 18) {
      return <button className='yellow' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked >= 18) {
      return <button className='white' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
