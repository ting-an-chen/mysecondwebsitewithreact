import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (
        <div>
          <header className="entry-header">
            <div className="entry-date">{this.props.date}</div>
            <h2 className="entry-title entry">{this.props.title}</h2>
          </header>

          <div className="entry-content entry">
            {this.props.content}
          </div>
        </div>
    );
  }
}

export default BlogPost;
