import React from "react";
import User from "./User";

function UserList(props) {
  console.log("Render UserList");

  const users = props.users;

  return (
    <table>
      <tbody>
        {users.map((user) => (
          <User
            onUserNameUpdate={props.onUserNameUpdate}
            key={user.id}
            user={user}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
