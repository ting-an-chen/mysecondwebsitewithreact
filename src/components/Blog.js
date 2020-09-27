import React, { Component } from 'react';
import BlogPost from './BlogPost.js';
import areYouBraveEnoughContent from './blog-post-contents/are-you-brave-enough.js';
import '../css/main.css';
import '../css/blog.css';
import '../css/readable-content.css';


class Blog extends Component {
  render() {
    return (
        <div className="main" id="page_container">
          <BlogPost title="Are You Brave Enough to Say Goodbye?" date="October 21, 2019" content={areYouBraveEnoughContent}/>
        </div>
    );
  }
}

export default Blog;
