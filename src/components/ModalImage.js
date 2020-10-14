import React, { Component } from 'react';

class ModalImage extends Component {
    render() {
        return (
              <div id="myModal" className="image-modal">
                <span onClick={this.props.onModalClose}
                className="close">&times;</span>

                <div class="modal-content-box"> 
                  <img className="modal-content-image" id="img01"
                      src={this.props.imgSource} alt=""/>
                  <p id="caption">{this.props.description}</p>
                </div>

              </div>
         );
      }
    }
    
    export default ModalImage