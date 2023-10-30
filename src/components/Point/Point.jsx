import React from "react";

export default function Point({
    isPlayerTwoNext,
    p1Point,
    p2Point,
    cardsState,
}) {
    let congratSound = () => {
        if (cardsState[0].point === 0 && cardsState[11].point === 0) {
            setTimeout(() => {
                document.getElementById("winnerAu").play();
            }, 300);
            return (
                <div>
                    <h3>Player {p1Point > p2Point ? 1 : 2} won</h3>
                    <div className="winner_detail">
                        <h2>Player 1: {p1Point} points</h2>
                        <h2>Player 2: {p2Point} points</h2>
                    </div>
                </div>
            );
        }
    };

    return (
        <div
            className={`gameState ${
                cardsState[0].point === 0 && cardsState[11].point === 0 ? "show_winner" : null
            } `}
        >
            <div className="playerState">
                <h1 className={isPlayerTwoNext ? null : "currentPlayer"}>P1</h1>
                <p className="point">{p1Point}</p>
                <h3>vs</h3>
                <p className="point">{p2Point}</p>
                <h1 className={isPlayerTwoNext ? "currentPlayer" : null}>P2</h1>
            </div>
            <div className="winner_notification">{congratSound()}</div>
        </div>
    );
}