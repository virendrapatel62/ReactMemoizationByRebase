import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const GET_USER_URL = "https://jsonplaceholder.typicode.com/users";

function User(props) {
  const user = props.user;
  console.log("Render User", user.id);
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
    </tr>
  );
}
function UserList(props) {
  console.log("Render UserList", props.users);

  const users = props.users;

  return (
    <table>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [showList, toggleList] = useState(true);

  console.log("Render App", users);

  useEffect(() => {
    axios.get(GET_USER_URL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const sumOfIds = useMemo(() => {
    console.log("Calculate Sum");
    return users.reduce((sum, user) => {
      console.log("Calculating Sum of Ids", sum, Date.now());
      return sum + user.id;
    }, 0);
  }, [users]);

  const handleToggleList = () => {
    toggleList(!showList);
  };

  return (
    <div>
      <h1>Users</h1>
      <h1>Sum of ids : {sumOfIds}</h1>
      <button onClick={handleToggleList}>Toggle List</button>

      <hr />
      {showList && <UserList users={users} />}
    </div>
  );
}

export default App;
