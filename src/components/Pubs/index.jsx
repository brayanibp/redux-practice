import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import * as pubsActions from '../../actions/pubsActions';

const { fetchAll: fetchAllUsers } = usersActions;
const { fetchByUser: fetchByUser } = pubsActions;

class Pubs extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.fetchAllUsers();
    }
    await this.props.fetchByUser(this.props.match.params.key);
  }
  render() {
    console.log(this.props);
    return <div>{this.props.match.params.key}</div>;
  }
}

const mapStateToProps = ({ usersReducer, pubsReducer }) => (
  { usersReducer, pubsReducer }
);

const mapDispatchToProps = {
  fetchAllUsers,
  fetchByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Pubs);