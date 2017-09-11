import React from 'react';
import { Link } from 'react-router-dom';

import FollowButtonContainer from './follow_button_container'
import UserInfo from './user_info';

class AuthorWidget extends React.Component {
  currentUserCanEdit() {
    return this.props.loggedIn &&
      this.props.currentUser.username ===
      this.props.author.username
  }

  render() {
    const date = new Date(this.props.date);
    return (
      <section className="authorWidget">
        <UserInfo
          author={this.props.author}
          date={this.props.story.created_at}
        />
      <FollowButtonContainer
        followeeId={this.props.author.id}/>
      </section>
    )
  }
}

export default AuthorWidget;
