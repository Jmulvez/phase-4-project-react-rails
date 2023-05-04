import React, { useState } from "react";

function NewReview({ onAddComment }) {

    function handleSubmit(e) {
        e.preventDefault();
        const reviewData = {
        };

        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(newReview => onAddReview(newReview))
    }

    return (
        <form className="NewReview" onSubmit={handleSubmit}>
            Add Review:
            <button>Submit</button>
        </form>
    )
}

export default NewReview;
