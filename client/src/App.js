import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser} />
      <div>
        <Switch>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
