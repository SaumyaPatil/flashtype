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

    startTimer = () =>{
        this.setState({timeStarted: true});
        const timer = setInterval(()=>{
            this.setState((prevState) => {
                if (prevState.timeRemaining > 0) {
                    return {
                        timeRemaining: prevState.timeRemaining - 1,
                    };
                } else {
                    clearInterval(timer);
                    return { timeStarted: false };
                }
            }, 1000);
        });
    };

    // startTimer = () =>{
    //     this.setState({timeStarted: true});
    //     const timer = setInterval(()=>{
    //         if(this.state.timeRemaining > 0){
    //             this.setState({
    //                 timeRemaining: this.state.timeRemaining -1,
    //             });
    //         }else{
    //             clearInterval(timer);
    //         }
    //     }, 1000);
    // };

    //This below function triggers any other input or timer as soon as the user starts typing.
    handleUserInput = (inputValue) =>{
        if(!this.state.timerStarted) this.startTimer();
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

//video 30, handling user input
//video 31, setting logic for timer
