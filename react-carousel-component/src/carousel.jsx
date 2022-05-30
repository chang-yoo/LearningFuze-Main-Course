import React from 'react';

const images = [
  { id: 0, image: '../images/001.png' },
  { id: 1, image: '../images/004.png' },
  { id: 2, image: '../images/007.png' },
  { id: 3, image: '../images/025.png' },
  { id: 4, image: '../images/039.png' }
];
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      image: images[0]
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.imageSwap = this.imageSwap.bind(this);
  }

  previousImage() {
    clearInterval(this.timerId);
    const { current } = this.state;
    if (current > 0) {
      this.setState({ current: current - 1 });
    } if (current === 0) {
      this.setState({ current: images.length - 1 });
    }
    this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  nextImage() {
    clearInterval(this.timerId);
    const { current } = this.state;
    if (current >= 0) {
      this.setState({ current: current + 1 });
    }
    if (this.state.current === images.length - 1) {
      this.setState({ current: 0 });
    }
    this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  imageSwap(event) {
    clearInterval(this.timerId);
    const dotId = Number(event.target.id);
    this.setState({ current: dotId });
    this.timerId = setInterval(() => this.nextImage(), 3000);
  }

  render() {
    return <div className="container">
      <i onClick={this.previousImage} className="left-angle fa-solid fa-angle-left fa-2x"></i>
       <i onClick={this.nextImage} className="right-angle fa-solid fa-angle-right fa-2x"></i>
      <div className="imagecontainer">
        {images.map(image => {
          if (this.state.current === image.id) {
            return <img key={image.id} src={image.image}></img>;
          } else {
            return null;
          }
        })
      }
      </div>
      <div className="dot-container">
        {images.map(dot => {
          if (this.state.current === dot.id) {
            return <i key={dot.id} id={dot.id} onClick={this.imageSwap} className='fas fa-circle horz-margin'></i>;
          } else {
            return <i key={dot.id} id={dot.id} onClick={this.imageSwap} className='far fa-circle horz-margin'></i>;
          }
        })}
      </div>
    </div>;
  }
}
