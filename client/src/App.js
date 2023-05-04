import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from "./Login";
import GamesList from './GamesList';
import NewGame from './NewGame';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/">
            <NewGame />
            <GamesList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
