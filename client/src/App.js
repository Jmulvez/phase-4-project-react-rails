import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  useEffect(() => {
    fetch("/games")
    .then((res) => res.json())
    .then(data => setGames(data)) 
  }, []);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
