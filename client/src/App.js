import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from "./Login";
import GamesList from './GamesList';
import NewGame from './NewGame';

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
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/">
            <NewGame />
            <GamesList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
