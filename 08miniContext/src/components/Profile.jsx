import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <p>password: {user.password}</p>
    </div>
  );
}

export default Profile;
