import React from 'react';

export const languages = [
  { name: 'Hypertext Markup Language', description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.' },
  { name: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.' },
  { name: 'JavaScript', description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curlybracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.' }
];
export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
    this.detail = this.detail.bind(this);
  }

  detail(event) {
    const id = this.state.id;
    if (id === null) {
      this.setState({ id: event.target.id });
    } else {
      this.setState({ id: null });
    }
  }

  render() {
    let classvalue = 'hidden';
    const list = languages.map((language, index) => {
      if (this.state.id === index.toString()) {
        classvalue = 'description';
      } else {
        classvalue = 'hidden';
      }
      return (
      <li key={index}><h3 id={index} onClick={this.detail}>{language.name}</h3><div id={index} className={classvalue}>{language.description}</div></li>
      );
    }
    );
    return (
      <ul>
        {list}
      </ul>
    );
  }
}
