import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
        <Link to="/"></Link>
        <button onClick={handleLogoutClick}>
          Logout
        </button>
    </div>
  );
}

export default NavBar;
