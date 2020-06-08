import React, { Component } from 'react';
import '../css/main.css';

class Home extends Component {
  render() {
    return (
  <div class="main">
    <div id="page_container">
      <img id="homepic" src="../photography/IMG_9327.JPG"></img>
      <div class="maintext">
        <span1>Welcome to An's personal website!</span1>
        <p>This is where I record my life stories, photographs I took, and crafts I made.</p>
      </div>
    </div>
  </div>
    );
  }
}

export default Home;