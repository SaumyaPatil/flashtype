import React from 'react';
import Nav from '../Nav/Nav';
import "./App.css";
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
    selectedParagraph: "",
    timeStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
};

class App extends React.Component{
    state = defaultState;

    fetchNewParagraph = () =>{
        fetch(ServiceUrl)
            .then(response => response.text())
            .then((data) =>{
                const selectedParagraphArray = data.split("");
                const testInfo = selectedParagraphArray.map((selectedLetter)=>{
                    return{
                        testLetter: selectedLetter,
                        status: "notAttempted",
                    }
                });
                this.setState({
                    ...defaultState,
                    testInfo, 
                    selectedParagraph : data
                });
            });
    }

    componentDidMount(){
        this.fetchNewParagraph();
    }

    startTimer = () =>{
        this.setState({timeStarted: true});
        const timer = setInterval(()=>{
            if(this.state.timeRemaining > 0){
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = 
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * TotalTime
                        : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
                });
            }else{
                clearInterval(timer);
            }
        }, 1000);
    }; 

    // startTimer() {
    //     this.setState({ timeStarted: true });

    //     const timer = setInterval(() => {
    //         this.setState(prevState => ({
    //             timeRemaining: prevState.timeRemaining > 0 ? prevState.timeRemaining - 1 : 0
    //         }));

    //         if (this.state.timeRemaining <= 0) {
    //             clearInterval(timer);
    //         }
    //     }, 1000);
    // }

    // startTimer = () =>{
    //     this.setState({timeStarted: true});
    //     const timer = setInterval(()=>{
    //         this.setState((prevState) => {
    //             if (prevState.timeRemaining > 0) {
    //                 return {
    //                     timeRemaining: prevState.timeRemaining - 1,
    //                 };
    //             } else {
    //                 clearInterval(timer);
    //                 return { timeStarted: false };
    //             }
    //         });
    //     }, 1000.0);
    // };

    startAgain = () => {
        this.fetchNewParagraph();
    }

    //This below function triggers any other input or timer as soon as the user starts typing.
    handleUserInput = (inputValue) =>{
        if(!this.state.timeStarted) this.startTimer();

        /* 
         * 1. Handle the underflow case - all characters should be shown as unattempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace
                - Mark the index+1 as not attempted (irrespective of whether the index is 0)
                - But, dont forget to check for the overflow case here
                (index+1 -> out of bound, when index === length - 1)
         * 4. Update the status in the test info
                - Find out the last character in the inputValue and its index 
                - Check if the character at the same index in testInfo (state) matches or not
                - Yes -> correct
                - No -> incorrect
         * 5. Irrespective of the case, characters, words, and speed (wpm) can be updated
        */

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters -1;
        if(index < 0){
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });
            return;
        }

        if(index >= this.state.selectedParagraph.length){
            this.setState({characters, words});
            return;
        }

        //Make a copy of testInfo
        const testInfo = this.state.testInfo;
        if(!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        //Check for the correct typed letter
        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        //Update the testInfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        //Update the state
        this.setState({
            testInfo,
            words,
            characters
        })
    };

    render(){
        return (
            <div className="app">
                {/* Nav section */}
                <Nav />

                {/* Landing Page */}
                <Landing />

                {/* Challenge Section */}
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timeStarted={this.state.timeStarted}
                    TotalTime={TotalTime}
                    testInfo={this.state.testInfo}
                    onInputChange = {this.handleUserInput}
                    startAgain = {this.startAgain}
                />

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;

