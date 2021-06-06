import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions'
import Loader from '../Loader';
import FatalError from '../FatalError';
import Table from './Table';

class Users extends Component {

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchAll();
    }
  }

  setRows = () => (
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))
  );

  setContent = () => {
    if (this.props.loadingUsers) {
      return <Loader />;
    } else if (this.props.usersError) {
      return <FatalError message={this.props.usersError} />;
    } else {
      return (
        <>
          <h1>Users</h1>
          <Table />
        </>
      )
    }
  }

  render() {
    return this.setContent();
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Users);