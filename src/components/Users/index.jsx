import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
    }
    fetchUsers();
  }, []);
  const setRows = () => (
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))
  );
  return (
    <div className="container">
      <table className="table">
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
    </div>
  );
}

export default Users;