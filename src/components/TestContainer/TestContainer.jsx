import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({ words, characters, wpm, timeRemaining, timeStarted, selectedParagraph }) =>{

    return(
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-container">
                    <TypingChallengeContainer 
                        words={words} 
                        characters={characters} 
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timeStarted={timeStarted}
                        selectedParagraph={selectedParagraph}
                    />
                </div>
            ) : (
                <div className="try-again-container">
                    <TryAgain words={words} characters={characters} wpm={wpm}/>
                </div>
            )}
        </div>
    );
};

export default TestContainer;
