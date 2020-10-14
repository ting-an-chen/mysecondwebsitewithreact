import React, { Component } from 'react';

import ModalImage from './photography/ModalImage.js';
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

  renderViewableImage(src, description) {
    return <img className="clickable-img" src={src} alt="" 
    onClick={() => this.imageClick(src, description)}/>
  }

  render() {
    return (
      <div>
        <h2>Photography</h2>

        {this.renderViewableImage(image1, "desc 111")}
        {this.renderViewableImage(image2, "desc 222")}

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