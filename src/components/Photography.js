import React, { Component } from 'react';

import ModalImage from './ModalImage.js';
import image1 from '../photography/ALBUM_1/IMG_1.JPG';
import image2 from '../photography/ALBUM_1/IMG_2.JPG';
import '../css/modal-image.css';

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

  render() {
    return (
      <div>
        <h2>Photography</h2>

        <img id="myImg" src={image1} alt=""
          onClick={() => this.imageClick(image1, "desc 1")} />
        <img id="myImg" src={image2} alt="" 
          onClick={() => this.imageClick(image2, "dsc 222")}/>

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