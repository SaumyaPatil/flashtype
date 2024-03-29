import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({ 
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timeStarted, 
    selectedParagraph,
    testInfo,
    onInputChange,
    startAgain
}) =>{
//data-aos="fade-up"
    return(
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div className="typing-challenge-container">
                    <TypingChallengeContainer 
                        words={words} 
                        characters={characters} 
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timeStarted={timeStarted}
                        selectedParagraph={selectedParagraph}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                    />
                </div>
            ) : (
                <div className="try-again-container">
                    <TryAgain 
                        words={words} 
                        characters={characters} 
                        wpm={wpm}
                        startAgain={startAgain}
                    />
                </div>
            )}
        </div>
    );
};

export default TestContainer;
