import React from 'react';
import pointer from '../images/pointer.svg'

class Speedometer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            score: this.props.score,
            rotate: 'rotate'
        }
    }

    componentDidMount() {
        const {score} = this.state;
            this.setState({
                rotate: this.state.rotate + '(' + (score * 18 + (-18)) + 'deg)'
            })
        }


    render() {
        const {rotate} = this.state;
        return(
            <div id = 'speedometer'>
            <div className='half-circle'>
                <div id = 'small-circle'> </div>
                <div id = 'pointer' style={{transform: rotate}}><img src={pointer}/></div>
                <div id='hilo'>
                    <span style={{marginRight: 270}}>Low</span><span>High</span>
                </div>
            </div>
            </div>
        )
    }
}

export default Speedometer