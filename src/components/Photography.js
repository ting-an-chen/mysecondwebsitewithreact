import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import album1_image12 from '../photography/ALBUM_1/IMG_12.JPG';
import album2_image11 from '../photography/ALBUM_2/IMG_11.JPG';

import '../css/modal-image.css';
import '../css/image-gallery.css';
import '../css/hoverbox.css';

class Photography extends Component {

  renderLinkToAlbum(albumName, imgSrc) {
      return (
        <div className="hvrbox">
            <Link to={'/photography/' + albumName} className="nav-link">
                <img src={imgSrc} className="hvrbox-layer_bottom" alt=""/>
                <div className="hvrbox-layer_top">
                   <div className="hvrbox-text">{albumName}</div>
               </div>
            </Link>
        </div>
                        );
  }

  render() {
    return (
      <div>
        <h2>Photography</h2>
        <div className="images-in-album-container">

            {this.renderLinkToAlbum('2017Finland', album1_image12)}
            {this.renderLinkToAlbum('2018Switzerland', album2_image11)}

        </div>

      </div>
    );
  }
}

export default Photography