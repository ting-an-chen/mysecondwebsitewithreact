import React, { Component } from 'react';

import Album from './photography/Album.js';
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

  album1 = [
    {src: image1, description: "descqqq 1"},
    {src: image2, description: "descqqq 1"},
    {src: image3, description: "descqqq 1"},
    {src: image4, description: "descqqq 1"},
    {src: image5, description: "descqqq 1"},
    {src: image6, description: "descqqq 1"},
    {src: image7, description: "descqqq 1"},
    {src: image8, description: "descqqq 1"},
    {src: image9, description: "descqqq 1"},
    {src: image10, description: "descqqq 1"},
    {src: image11, description: "descqqq 1"},
    {src: image12, description: "descqqq 1"},
    {src: image13, description: "descqqq 2"}
  ];

  render() {
    return (
      <div>
        <h2>Photography</h2>

        <Album albumTitle="first album" images={this.album1} />

      </div>
    );
  }
}

export default Photography