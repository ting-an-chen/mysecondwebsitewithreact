import React, { Component } from 'react';

class ModalImage extends Component {
    render() {
        return (
              <div id="myModal" className="image-modal">
                <span onClick={this.props.onModalClose} className="close">&times;</span>
                <img className="modal-content" id="img01"
                    src={this.props.imgSource} alt=""/>
                <div id="caption">{this.props.description}</div>
              </div>
         );
      }
    }
    
    export default ModalImage