import { UserContextProvider } from "../context/UserContextProvider.jsx";
import { useContext } from "react";
import Login from "./Login";
import UserContext from "../context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return <div>Welocome {user.username}</div>;
}

export default Profile;
