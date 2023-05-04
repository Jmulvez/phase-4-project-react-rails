import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GamesList() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      fetch("/games")
        .then((r) => r.json())
        .then(setGames);
    }, []);

    function handleNewGame(newGame) {
        setGames([...games, {...newGame, reviews: []}])
    }

    const getAllGames = games.map((game) => {
        return <div key={game.id}>
                    <h2>title={game.title}</h2>
                    <img>imageUrl={game.image_url}</img>
                    <p>description={game.description}</p>
                    <p>developer={game.developer}</p>
                    <Link to={`/games/${game.id}`}>
                        <p>Reviews for {game.title}</p>
                    </Link>
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
