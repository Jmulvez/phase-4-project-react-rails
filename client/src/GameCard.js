import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function GameCard({  }) {
    const [selectedGame, setSelectedGame] = useState({
        title: "",
        reviews: []
    });
    const params = useParams();

    useEffect(() => {
        const selectedGame = games.find((game) => game.id === parseInt(params.id))
        if (selectedGame) {
            setSelectedGame(selectedGame)
        }
    }, [games, params.id]);

    const getReviews = selectedGame.reviews.map((review) => {
        return <div className="card" >
                    
                </div>
    })

    return (
        <div>
            <h1>
                {selectedGame.title} Reviews:
            </h1>
            <ul>
                {getReviews}
            </ul>
        </div>
    )
}

export default GameCard;
