import React from 'react';
import Nav from '../Nav/Nav';
import "./App.css";
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 60;
class App extends React.Component{
    state = {
        selectedParagraph: "Hello World",
        timeStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
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
                />

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
