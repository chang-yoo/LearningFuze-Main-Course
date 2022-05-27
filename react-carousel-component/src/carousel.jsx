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
    this.dotColor = this.dotColor.bind(this);
    this.imageSwap = this.imageSwap.bind(this);
  }

  previousImage() {
    // clearInterval(this.timerId)
    const { current } = this.state;
    if (current > 0) {
      this.setState({ current: current - 1, image: images[current] });
    } if (current === 0) {
      this.setState({ current: images.length - 1, image: images[current] });
    }
    this.dotColor();
    // this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  nextImage() {
    // clearInterval(this.timerId)
    const { current } = this.state;
    if (current >= 0) {
      this.setState({ current: current + 1, image: images[current] });
    }
    if (this.state.current === images.length - 1) {
      this.setState({ current: 0, image: images[images.length - 1] });
    }
    this.dotColor();
    // this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  // componentDidMount() {
  //   this.timerId = setInterval(() => this.nextImage(), 3000);
  // }

  imageSwap(event) {
    // clearInterval(this.timerId)
    const dotId = event.target.id;
    this.setState({ current: dotId, image: images[dotId] });
    // this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  dotColor() {
    const dots = document.querySelectorAll('.fa-circle');
    for (let i = 0; i < dots.length; i++) {
      if (Number(dots[i].id) === this.state.current) {
        dots[i].className = 'fas fa-circle horz-margin';
      } else if (dots[i].id > 4) {
        dots[0].className = 'fas fa-circle horz-margin';
      } else {
        dots[i].className = 'far fa-circle horz-margin';
      }
    }
  }

  render() {
    return <div className="container">
      <i onClick={this.previousImage} className="left-angle fa-solid fa-angle-left fa-2x"></i>
       <i onClick={this.nextImage} className="right-angle fa-solid fa-angle-right fa-2x"></i>
      <div className="imagecontainer">
        <img src={this.state.image}></img>
      </div>
      <div className="dot-container">
         <i id="0" onClick={this.imageSwap} className="fas fa-circle horz-margin"></i>
         <i id="1" onClick={this.imageSwap} className="far fa-circle horz-margin"></i>
         <i id="2" onClick={this.imageSwap} className="far fa-circle horz-margin"></i>
         <i id="3" onClick={this.imageSwap} className="far fa-circle horz-margin"></i>
         <i id="4" onClick={this.imageSwap} className="far fa-circle horz-margin"></i>
      </div>
    </div>;
  }
}
