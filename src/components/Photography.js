import React, { Component } from 'react';

import Album from './photography/Album.js';
import {album1, album2 } from './photography/AlbumsLoader.js';

import '../css/modal-image.css';
import '../css/image-gallery.css';

class Photography extends Component {

  render() {
    return (
      <div>
        <h2>Photography</h2>

        <Album albumTitle="first album" images={album1} />
        <Album albumTitle="second album" images={album2} />

      </div>
    );
  }
}

export default Photography