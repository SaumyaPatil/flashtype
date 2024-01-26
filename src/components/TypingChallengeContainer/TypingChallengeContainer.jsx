import React from "react";
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({ words, characters, wpm, timeRemaining, timeStarted, selectedParagraph, testInfo, onInputChange }) =>{
    return(
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>

                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
            </div>

            {/* The REAL Challenge */}
            <div className="typewriter-container">
                <TypingChallenge 
                onInputChange={onInputChange}
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timeStarted={timeStarted}
                testInfo={testInfo}
                />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;
