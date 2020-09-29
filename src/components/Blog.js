import React, { Component } from 'react';
import BlogPost from './BlogPost.js';
import {storyLungCancerPatientIntro, storyLungCancerPatientContent} from './blog-post-contents/story-lung-cancer-patient.js';
import {areYouBraveEnoughIntro, areYouBraveEnoughContent} from './blog-post-contents/are-you-brave-enough.js';
import '../css/main.css';
import '../css/blog.css';
import '../css/readable-content.css';


class Blog extends Component {
  render() {
    return (
        <div className="main" id="page_container">
          <BlogPost title="A Story about a Lung Cancer Patient." date="November 3, 2019" intro={storyLungCancerPatientIntro} content={storyLungCancerPatientContent}/>
          <BlogPost title="Are You Brave Enough to Say Goodbye?" date="October 21, 2019" intro={areYouBraveEnoughIntro} content={areYouBraveEnoughContent}/>
        </div>
    );
  }
}

export default Blog;
