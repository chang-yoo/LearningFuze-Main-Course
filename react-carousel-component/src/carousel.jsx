import React from 'react';

const images = ['../images/001.png', '../images/004.png', '../images/007.png', '../images/025.png', '../images/039.png'];
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      image: images[0]
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  previousImage() {
    const current = this.state.current;
    clearInterval(this.intervalId);
    if (current > 0) {
      this.setState({ current: current - 1, image: images[current] });
    } if (current <= 0) {
      this.setState({ current: images.length - 1, image: images[current] });
    }
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  // switchImage() {

  // }

  nextImage() {
    clearInterval(this.IntervalId);
    const current = this.state.current;
    if (current >= 0) {
      this.setState({ current: current + 1, image: images[current] });
    }
    if (this.state.current >= images.length) {
      this.setState({ current: 0, image: images[0] });
    }
    // this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  componentDidMount() {
    // this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  render() {
    return <div className="container">
              <i onClick={this.previousImage} className="left-angle fa-solid fa-angle-left fa-2x"></i>
              <div className="imagecontainer">
                <img src={this.state.image}></img>
              </div>
              <i onClick={this.nextImage}className="right-angle fa-solid fa-angle-right fa-2x"></i>
              <div className="dot-container">
                <i id="0" className="fas fa-circle horz-margin"></i>
                <i id="1" className="far fa-circle horz-margin"></i>
                <i id="2" className="far fa-circle horz-margin"></i>
                <i id="3" className="far fa-circle horz-margin"></i>
                <i id="4" className="far fa-circle horz-margin"></i>
              </div>
            </div>;
  }
}
