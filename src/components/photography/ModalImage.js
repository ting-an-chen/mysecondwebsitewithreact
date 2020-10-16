import React, { Component } from 'react';

class ModalImage extends Component {
    render() {
        return (
              <div className="image-modal">
                <span onClick={this.props.onModalClose}
                className="modal-close">&times;</span>

                <div className="modal-content-box">
                  <img className="modal-content-image" id="img01"
                      src={this.props.imgSource} alt=""/>
                  <p id="modal-caption">{this.props.description}</p>
                </div>

              </div>
         );
      }
    }
    
    export default ModalImage