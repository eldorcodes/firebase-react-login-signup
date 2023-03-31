import React from "react";
import { logOut } from '../firebase/myDatabase';

export default function Profile() {
  return <div>
    <h1>Profile Page</h1>
    <button onClick={() => logOut()}>Logout</button>
  </div>
}
