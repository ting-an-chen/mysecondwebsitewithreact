import React, { Component } from 'react';

import '../css/craft.css';

import image_cutboard from '../photography/profoliopics/IMG_0095.jpeg';
import image_babies from '../photography/profoliopics/IMG_0141.jpeg';
import image_space from '../photography/profoliopics/IMG_4045.jpeg';
import image_snowman from '../photography/profoliopics/IMG_2013.jpeg';
import image_plushy from '../photography/profoliopics/IMG_9817.jpeg';

class Craft extends Component {

  renderImage(mainText, date, materials, imgSrc) {
    return (
      <div className="hvrbox2">
        <img src={imgSrc} className="project" alt="" />
        <div class="word_container">
          <div class="description">
              <h3>{mainText}</h3>
              <span1>Information:</span1>
              <span1>Date: {date}</span1>
              <span1>Materials: {materials}</span1>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Craft</h2>

        <div className="picture_container">
          {this.renderImage("Doctors?", "July 2016", "cutboard, marker", image_cutboard)}
          {this.renderImage("Babies?", "July 2016", "cutboard, marker", image_babies)}
          {this.renderImage("Space!", "July 2016", "cutboard, marker", image_space)}
          {this.renderImage("Snowman?", "July 2016", "cutboard, marker", image_snowman)}
          {this.renderImage("Pig plushy", "July 2016", "cutboard, marker", image_plushy)}
        </div>
      </div>
    );
  }
}

export default Craft;
