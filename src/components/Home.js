import React, { Component } from 'react';
import '../css/homestyle.css';

class Home extends Component {
  render() {
    return (     
        <div className="home-image">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row">
                    <header className="text-center col-12">
                        <h1>Welcome to An's personal website!</h1>
                        <p>This is where I record my life stories, photographs I took, and crafts I made.</p>
                    </header>
                    <section className="text-center col-12">
                        <button type="button" className="btn btn-light">Enter</button>
                    </section>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;