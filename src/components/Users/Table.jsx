import { connect } from 'react-redux';
import EyeIcon from '../EyeIcon';
import { Link } from 'react-router-dom';

function Table(props) {

  const setRows = () => (
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/pubs/${key}`}>
            <EyeIcon />
          </Link>
        </td>
      </tr>
    ))
  );

  return (
    <table className="table" >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        {setRows()}
      </tbody>
    </table>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);