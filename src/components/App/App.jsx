import React from 'react';
import Nav from '../Nav/Nav';
import "./App.css";
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 60;
// const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component{
    state = {
        selectedParagraph: "",
        timeStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: [],
    };

    componentDidMount(){
        //  fetch(ServiceUrl)
        //     .then(response => response.text())
        //     .then((data) =>{
        //         this.setState({selectedParagraph : data});
        //         const selectedParagraphArray = this.state.selectedParagraph.split("");
        //         const testInfo = selectedParagraphArray.map((selectedLetter)=>{
        //             return{
        //                 testLetter: selectedLetter,
        //                 status: "notAttempted",
        //             }
        //         });
        //         this.setState({testInfo});
        //     });
    }

    // startTimer = () =>{
    //     this.setState({timeStarted: true});
    //     const timer = setInterval(()=>{
    //         if(this.state.timeRemaining > 0){
    //             this.setState({
    //                 timeRemaining: this.state.timeRemaining - 1,
    //             });
    //         }else{
    //             clearInterval(timer);
    //         }
    //     }, 1000);
    // }; 

    startTimer() {
        this.setState({ timeStarted: true });

        const timer = setInterval(() => {
            this.setState(prevState => ({
                timeRemaining: prevState.timeRemaining > 0 ? prevState.timeRemaining - 1 : 0
            }));

            if (this.state.timeRemaining <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    //This below function triggers any other input or timer as soon as the user starts typing.
    handleUserInput = (inputValue) =>{
        if(!this.state.timerStarted) this.startTimer();

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
        // const characters = inputValue.length;
        // const words = inputValue.split(" ").length;
        // const index = characters -1;
        // if(index < 0){
            
        // }
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
                />

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;

