import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
const GET_USER_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [showList, toggleList] = useState(true);

  console.log("Render App");

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

  // const onUserNameUpdate = useCallback((userId, newName) => {
  //   setUsers((users) => {
  //     const newUsersList = [...users];
  //     const index = newUsersList.findIndex((user) => user.id === userId);
  //     const userToUpdate = {
  //       ...newUsersList[index],
  //     };
  //     userToUpdate.name = newName;
  //     newUsersList[index] = userToUpdate;
  //     return newUsersList;
  //   });
  // }, []);

  const onUserNameUpdate = useMemo(() => {
    return (userId, newName) => {
      setUsers((users) => {
        const newUsersList = [...users];
        const index = newUsersList.findIndex((user) => user.id === userId);
        const userToUpdate = {
          ...newUsersList[index],
        };
        userToUpdate.name = newName;
        newUsersList[index] = userToUpdate;
        return newUsersList;
      });
    };
  }, []);

  const userList = useMemo(() => {
    return <UserList onUserNameUpdate={onUserNameUpdate} users={users} />;
  }, [onUserNameUpdate, users]);

  return (
    <div>
      <h1>Users</h1>

      <h1
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count : {count}
      </h1>

      <h1>Sum of ids : {sumOfIds}</h1>
      <button onClick={handleToggleList}>Toggle List</button>

      <hr />
      {showList && userList}
    </div>
  );
}

export default App;
