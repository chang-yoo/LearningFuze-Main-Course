import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'normal'
    };
    this.menubar = this.menubar.bind(this);
    this.menuIcon = this.menuIcon.bind(this);
  }

  menubar() {
    this.setState({ status: 'menu' });
  }

  menuIcon() {
    this.setState({ status: 'normal' });
  }

  render() {
    const status = this.state.status;
    if (status === 'normal') {
      return <div className='menu-container'>
               <div className="container">
                 <i onClick={this.menubar} className="fa-solid fa-bars fa-2x" />
               </div>
             </div>;
    }
    return <div className='menu-container'>
             <div onClick={this.menuIcon} className="dark-container">
               <i onClick={this.menubar} className="fa-solid fa-bars fa-2x" />
             </div>
             <div className="menu slide-right"><h1>menu</h1><h3><a onClick={this.menuIcon}>About</a></h3><h3 onClick={this.menuIcon}><a onClick={this.menuIcon}>Get Started</a></h3><h3 onClick={this.menuIcon}><a onClick={this.menuIcon}>Sign In</a></h3>
             </div>
           </div>;
  }
}
