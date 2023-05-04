import React, { useState, useEffect } from 'react';
import NewReview from './NewReview';
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
        return <div className="card">
                    <h3>{review.user_id.username}</h3>
                    <p>{review.rating}</p>
                    <p>{review.comment}</p>
               </div>
    })

    return (
        <div>
            <h1>
                {selectedGame.title} Reviews:
            </h1>
            <NewReview />
            <ul>
                {getReviews}
            </ul>
        </div>
    )
}

export default GameCard;
