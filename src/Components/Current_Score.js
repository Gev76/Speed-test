import React from 'react';





class CurrentScore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: this.props.score,
            color: '',
            text: ''
        }
    }



    componentDidMount() {
        const {score} = this.state;
        if (score <= 3.3){
            this.setState({
                color: '#21C393',
                text: 'Good'
            })
        } else if (score > 3.3 && score <= 6.6){
            this.setState({
                color: 'orange',
                text: 'Ok'
            })
        } else if (score > 6.6 && score <= 10) {
            this.setState({
                color: 'red',
                text: 'Bad'
            })
        }
    }

    render() {
        const {score, color, text}= this.state;
        return (
            <div id = 'currentScore' >
                <div id = 'currentText'>Current Score</div>
                <div id = 'number'>
                    <span id = 'num'><span style = {{ color: color, fontSize: 60 }}>{score}</span>
                        <span style = {{ fontSize: 40, color: 'rgba(44, 52, 56, 0.74)'}}>/10</span></span>
                    <span><button className="button" style={{fontWeight: '100', backgroundColor: color}}>{text}</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default CurrentScore