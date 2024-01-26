import React from 'react';
import './TestLetter.css';

const TestLetter = ({individualLetterInfo}) => {
    const status = individualLetterInfo.status;

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status]; //This is the key provided to find the value

    return(
        <span className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    );
}

export default TestLetter;
