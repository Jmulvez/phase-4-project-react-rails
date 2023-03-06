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
    <Wrapper>
      <Logo>
        <Link to="/"></Link>
      </Logo>
      <Nav>
        <Button onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

export default NavBar;
