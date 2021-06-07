import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import * as pubsActions from '../../actions/pubsActions';
import Loader from '../Loader';
import FatalError from '../FatalError';
import Comments from './Comments';
import './style.css';

const { fetchAll: fetchAllUsers } = usersActions;
const { fetchByUser: fetchByUser, openClose, fetchComments } = pubsActions;

class Pubs extends Component {
  async componentDidMount() {
    const {
      fetchAllUsers,
      fetchByUser,
      match: {
        params: { key }
      }
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await fetchAllUsers();
    }
    if (this.props.usersReducer.usersError) {
      return;
    }
    if (!('pubs_key' in this.props.usersReducer.users[key])) {
      await fetchByUser(key);
    }
  }

  setUser() {
    const {
      usersReducer,

      match: {
        params: { key }
      }
    } = this.props;
    if (!usersReducer.users.length || usersReducer.loadingUsers) {
      return <Loader />
    } if (usersReducer.usersError) {
      return <FatalError message={usersReducer.usersError} />
    }
    return (
      <>
        <h1>Publicaciones de {usersReducer.users[key].name}</h1>
      </>
    );
  }

  setPubs() {
    const {
      usersReducer,
      usersReducer: { users },
      pubsReducer,
      pubsReducer: { pubs },
      match: { params: { key } }
    } = this.props;
    if (!usersReducer.users.length) {
      return;
    }
    if (usersReducer.usersError) {
      return;
    }
    if (pubsReducer.loadingPubs) {
      return <Loader />
    }
    if (pubsReducer.pubsError) {
      return <FatalError message={pubsReducer.pubsError} />
    }
    if (!pubsReducer.pubs.length) {
      return;
    }
    if (!('pubs_key' in this.props.usersReducer.users[key])) {
      return;
    }
    const { pubs_key } = users[key];
    return this.showInfo(pubs, pubs_key);
  }

  showInfo = (pubs, pubs_key) => (
    pubs[pubs_key].map((pub, comments_key) => (
      <div
        key={pub.id}
        className="pub_title"
        onClick={() => this.showComments(pubs_key, comments_key, pub.comments)}
      >
        <h2>
          {pub.title}
        </h2>
        <p>
          {pub.body}
        </p>
        {
          (pub.open) ? <Comments comments={pub.comments} /> : ''
        }
      </div>
    ))
  )

  showComments = (pub_key, com_key, comments) => {
    this.props.openClose(pub_key, com_key);
    if (!comments.length) {
      this.props.fetchComments(pub_key, com_key);
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        {this.setUser()}
        {this.setPubs()}
      </>
    );
  }
}

const mapStateToProps = ({ usersReducer, pubsReducer }) => (
  { usersReducer, pubsReducer }
);

const mapDispatchToProps = {
  fetchAllUsers,
  fetchByUser,
  openClose,
  fetchComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Pubs);