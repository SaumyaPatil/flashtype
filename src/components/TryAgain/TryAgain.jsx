import React from "react";
import './TryAgain.css';

const TryAgain = ({
    words,
    characters,
    wpm
}) =>{
    return(
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button
                className="end-buttons start-again-btn"
                >
                    Re-Try
                </button>

                <button
                className="end-buttons share-btn"
                >
                    Share
                </button>

                <button
                className="end-buttons tweet-btn"
                >
                    Tweet 
                </button>
            </div>
        </div>
    );
};

export default TryAgain;
