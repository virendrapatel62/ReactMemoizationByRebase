import React from "react";
import { useState } from "react";

function User(props) {
  const user = props.user;
  console.log("Render User");

  const onUserNameUpdate = props.onUserNameUpdate;

  const [newName, setNewName] = useState("");

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleUpdateClick = () => {
    onUserNameUpdate(user.id, newName);
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>
        <input value={newName} onChange={handleOnChange} type="text" />
        <button onClick={handleUpdateClick}>Update</button>
      </td>
    </tr>
  );
}

export default React.memo(User);
