import React, { Component } from 'react';
import BlogPost from './BlogPost.js';
import areYouBraveEnoughContent from './blog-post-contents/are-you-brave-enough.js';

class Blog extends Component {
  render() {
    return (
        <div>
          <h2>Blog</h2>
          <BlogPost title="Are You Brave Enough to Say Goodbye?" date="October 21, 2019" content={areYouBraveEnoughContent}/>
        </div>
    );
  }
}

export default Blog;
