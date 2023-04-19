import { useEffect, useState } from "react";
import GameCard from './GameCard';

function GamesList() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      fetch("/games")
        .then((res) => res.json())
        .then(setGames);
    }, []);

    const getAllGames = games.map((game) => {
        return <div>
                    <GameCard 
                        key={game.id}
                        title={game.title}
                        imageUrl={game.image_url}
                        description={game.description}
                        developer={game.developer}
                        reviews={game.reviews}
                    />
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
