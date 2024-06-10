"use client";

import { useState } from 'react'

interface Props {
}

const Tennis: React.FC<Props> = () => {
    const [player1score, setPlayer1Score] = useState(0)
    const [player2score, setPlayer2Score] = useState(0)

    const soreDifferenceOver1 = Math.abs(player1score - player2score) > 1
    const soreDifference = Math.abs(player1score - player2score) === 1


    const isGameFinished = () => {
        if ((player1score > 3 || player2score > 3) && soreDifferenceOver1) {
            return true;
        }
    }

    const tennisScore = (score: number) => {

            switch (score) {
                    case 0:
                        return "0"
                    case 1:
                        return "15"
                    case 2:
                        return "30"
                    case 3:
                        return "40"
                    default:
                        return ""
                }
    }

    const scorePlayer = () => {
        if (player1score > 3 && player1score > player2score && soreDifferenceOver1) {
            return "Player 1 Win"
        }

        if (player2score > 3 && player2score > player1score && soreDifferenceOver1) {
            return "Player 2 Win"
        }

        if (player1score === player2score && player1score > 2 && player2score > 2) {
            return "Deuce"
        }

        if (player1score > 2 && player2score > 2) {
            if (soreDifference) {
                return player1score > player2score ? "Player 1 Advantage" : "Player 2 Advantage"
            }
        }

        return "in progress"
    
    }

    return (
        <div>
            {/* <Link to="/">Home</Link> */}
            <h1 data-testid="test-h1">TENNIS KATA</h1>
            <h2>Player 1 - Player 2</h2>
            <h2 data-testid="test-score">{scorePlayer() === "in progress" ? (tennisScore(player1score) + " - " + tennisScore(player2score)) : scorePlayer()}</h2>
            <button 
                onClick={() => {setPlayer1Score(player1score + 1)}}
                disabled={isGameFinished()}
                data-testid="test-button1"
            >Player 1 Wins</button>
            <button onClick={() => {
                setPlayer2Score(player2score + 1)
                
            }} disabled={isGameFinished()} data-testid="test-button2">Player 2 Wins</button>

            {isGameFinished() ? <h1>Game Finished</h1> : <h1>Game in progress</h1>}

            <button onClick={() => {
                setPlayer1Score(0)
                setPlayer2Score(0)
            }} data-testid="test-buttonReset">Reset Game</button>
        </div>
    );
};

export default Tennis;