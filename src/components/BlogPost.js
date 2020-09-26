import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (
        <div>
          <header class="entry-header">
            <div class="entry-date">{this.props.date}</div>
            <h2 class="entry-title">{this.props.title}</h2>
          </header>
        </div>
    );
  }
}

export default BlogPost;
