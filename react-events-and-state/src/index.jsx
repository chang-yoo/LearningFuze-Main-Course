import React from 'react';
import ReactDOM from 'react-dom';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const state = this.state.isClicked; // false
    let button;
    if (state) {
      button = <button>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ClickButton/>);
