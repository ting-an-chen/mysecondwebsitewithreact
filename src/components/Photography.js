import React, { Component } from 'react';

import ModalImage from './photography/ModalImage.js';
import image1 from '../photography/ALBUM_1/IMG_1.JPG';
import image2 from '../photography/ALBUM_1/IMG_2.JPG';
import image3 from '../photography/ALBUM_1/IMG_3.JPG';
import image4 from '../photography/ALBUM_1/IMG_4.JPG';
import image5 from '../photography/ALBUM_1/IMG_5.JPG';
import image6 from '../photography/ALBUM_1/IMG_6.JPG';
import image7 from '../photography/ALBUM_1/IMG_7.JPG';
import image8 from '../photography/ALBUM_1/IMG_8.JPG';
import image9 from '../photography/ALBUM_1/IMG_9.JPG';
import image10 from '../photography/ALBUM_1/IMG_10.JPG';
import image11 from '../photography/ALBUM_1/IMG_11.JPG';
import image12 from '../photography/ALBUM_1/IMG_12.JPG';
import image13 from '../photography/ALBUM_1/IMG_13.JPG';
import image14 from '../photography/ALBUM_1/IMG_14.JPG';
import image15 from '../photography/ALBUM_1/IMG_15.JPG';
import image16 from '../photography/ALBUM_1/IMG_16.JPG';
import image17 from '../photography/ALBUM_1/IMG_17.JPG';
import image18 from '../photography/ALBUM_1/IMG_18.JPG';
import image19 from '../photography/ALBUM_1/IMG_19.JPG';
import image20 from '../photography/ALBUM_1/IMG_20.JPG';
import image21 from '../photography/ALBUM_1/IMG_21.JPG';
import '../css/modal-image.css';
import '../css/image-gallery.css';

class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsVisible: false,
      modalImgSource: image1,
      modalDescription: "description"
    };
    this.imageModalClose = this.imageModalClose.bind(this);
  }

  imageClick(imgSource, description) {
    this.setState({
      modalIsVisible: true,
      modalImgSource: imgSource,
      modalDescription: description
    });
  }

  imageModalClose() {
    this.setState({
      modalIsVisible: false
    });
  }

  renderViewableImage(src, description) {
    return <img className="clickable-img" src={src} alt="" 
    onClick={() => this.imageClick(src, description)}/>
  }

  render() {
    return (
      <div>
        <h2>Photography</h2>

        <div className="images-in-album-container">
          {this.renderViewableImage(image1, "desc 111")}
          {this.renderViewableImage(image2, "desc 222")}
          {this.renderViewableImage(image3, "desc 222")}
          {this.renderViewableImage(image4, "desc 222")}
          {this.renderViewableImage(image5, "desc 222")}
          {this.renderViewableImage(image6, "desc 222")}
          {this.renderViewableImage(image7, "desc 222")}
          {this.renderViewableImage(image8, "desc 222")}
          {this.renderViewableImage(image9, "desc 222")}
          {this.renderViewableImage(image10, "desc 222")}
          {this.renderViewableImage(image11, "desc 111")}
          {this.renderViewableImage(image12, "desc 222")}
          {this.renderViewableImage(image13, "desc 222")}
          {this.renderViewableImage(image14, "desc 222")}
          {this.renderViewableImage(image15, "desc 222")}
          {this.renderViewableImage(image16, "desc 222")}
          {this.renderViewableImage(image17, "desc 222")}
          {this.renderViewableImage(image18, "desc 222")}
          {this.renderViewableImage(image19, "desc 222")}
          {this.renderViewableImage(image20, "desc 222")}
          {this.renderViewableImage(image21, "desc 222")}
        </div>

        {this.state.modalIsVisible &&
          <ModalImage
            imgSource={this.state.modalImgSource}
            description={this.state.modalDescription}
            onModalClose={this.imageModalClose} />}

      </div>
    );
  }
}

export default Photography