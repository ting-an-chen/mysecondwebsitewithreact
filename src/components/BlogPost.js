import React, { Component } from 'react';

const readMore = 'Read more...';
const readLess = 'Read less';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visibleContent: this.props.intro,
          readMoreLessButtonText: readMore,
        };
      }

  toggleReadMoreLess() {
      if (this.state.readMoreLessButtonText === readMore) {
        this.setState({readMoreLessButtonText: readLess,
                       visibleContent: <>{this.props.intro} {this.props.content}</>})
      } else {
        this.setState({readMoreLessButtonText: readMore,
                       visibleContent: this.props.intro})
      }
  }

  render() {
    return (
        <div>
          <header className="entry-header">
            <div className="entry-date">{this.props.date}</div>
            <h2 className="entry-title entry">{this.props.title}</h2>
          </header>

          <div className="entry-content entry">
            {this.state.visibleContent}
          </div>
          <button onClick={() => this.toggleReadMoreLess()}>
              {this.state.readMoreLessButtonText}
          </button>
        </div>
    );
  }
}

export default BlogPost;
