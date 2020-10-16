import React, { Component } from 'react';

import ModalImage from './ModalImage.js';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsVisible: false,
      modalImgSource: "",
      modalDescription: "description"
    };
    this.imageModalClose = this.imageModalClose.bind(this);
  }

  renderedImages = this.props.images.map((image, index) =>
    <img key={index} className="clickable-img" src={image.src} alt=""
    onClick={() => this.imageClick(image.src, image.description)}/>
  );

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
        <h2>{this.props.albumTitle}</h2>

        <div className="images-in-album-container">
          {this.renderedImages}
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

export default Album