import React from 'react';
import '../css/sidebar.css';
import '../css/main.css';
class Welcome extends React.Component {
    render() {
      return (
      <div>
      <h1>Hello, {this.props.name}</h1>
      <div id="name">
        <span>TING AN </span>
        <span>CHEN</span>
      </div>
    
      <a href="index.htm">HOME</a>
      <a href="blog.html">BLOG</a>
      <a href="photography.html">PHOTOGRAPHY</a>
      <a href="craft.html">CRAFT</a>
      <a href="contact.html">CONTACT</a>
      </div> 
      );

    }
  }

  export default Welcome;