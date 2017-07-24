import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';

import SessionFormContainer from '../session/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: (
        this.props.pagePath === "login" ||
        this.props.pagePath === "signup"
      ) ? true : false,
    };
    this.formType = '';

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  openModal(formType) {
    return () => {
      this.formType = formType;
      this.setState({ modalIsOpen: true });
    };
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  logout() {
    this.setState({ modalIsOpen: false });
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="greeting">
          <span>Welcome, {this.props.currentUser.username}!</span>
          <Link onClick={this.logout} to="/">Logout</Link>
        </div>
      );
    }
    return (
      <div className="login-signup">
        <span className="link"
          onClick={this.openModal('login')}>Login</span>
        &nbsp;
        <span className="link"
          onClick={this.openModal('signup')}>Sign Up</span>
        <Modal
          className="modal"
          overlayClassName="modal-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Login Modal">

          <SessionFormContainer
            history={this.props.history}
            formType={this.formType} />

        </Modal>
      </div>
    );
  }
}

export default Greeting;