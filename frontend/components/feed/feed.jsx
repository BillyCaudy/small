import React from 'react';
import FeedContainer from './feed_container';
import FeedItem from './feed_item';

class Feed extends React.Component {
  componentDidMount() {
    this.props.requestAllStories();
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);
    this.generateFeedRows = this.generateFeedRows.bind(this);
  }

  generateFeedRows() {
    let arr = []
    let idx = 0
    while (idx < this.props.stories.length-3) {
      arr.push(
        <section className="feed-row">
          <FeedItem
            key={this.props.stories[idx].id}
            story={this.props.stories[idx]}
          />
          <FeedItem
            key={this.props.stories[idx + 1].id}
            story={this.props.stories[idx + 1]}
          />
          <FeedItem
            key={this.props.stories[idx + 2].id}
            story={this.props.stories[idx + 2]}
          />
        </section>
      )
      idx += 3;
    }
    return arr;
  }

  render() {
    if (this.props.stories.length > 0) {
      return (
        <div>
          <section className="feed">
            {this.generateFeedRows()}
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
