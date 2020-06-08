import React, { Component } from 'react';
import '../css/homestyle.css';

class Home extends Component {
  render() {
    return (     
   <body>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row">
          <header class="text-center col-12">
           <h1>Welcome to An's personal website!</h1>
           <p>This is where I record my life stories, photographs I took, and crafts I made.</p>
          </header>
          <section class="text-center col-12">
           <button type="button" class="btn btn-light">Enter</button>
          </section>
        </div>
      </div>
  
  
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   </body>
   
    );
  }
}

export default Home;