import { useEffect, useState } from "react";

function GamesList() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      fetch("/games")
        .then((r) => r.json())
        .then(setGames);
    }, []);

    const getAllGames = games.map((game) => {
        return <div key={game.id}>
                    <h1>{game.title}</h1>
                    <img src={game.image_url}></img>
                    <p>{game.description}</p>
                    <p>By: {game.developer}</p>
               </div>
    })
  
    return (
        <div>
            <h1>
                All Games
            </h1>
            {getAllGames}
        </div>
    )
}

export default GamesList;