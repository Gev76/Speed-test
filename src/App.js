import React from 'react';
import './App.css';
import Header from './Components/header';
import CurrentScore from './Components/Current_Score';
import Speedometer from './Components/Speedometer'
import List from './Components/List'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: 7.7
        }
    }



    render() {
        const {score} = this.state;

        return (
            <div>
                <Header />
                <CurrentScore score = {score} />
                <Speedometer score = {score} />
                <List/>
            </div>

        );
    }
}

export default App;
