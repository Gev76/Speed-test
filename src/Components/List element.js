import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class ListElemet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: this.props.item.score,
            text: this.props.item.text,

        }
    }


    render() {
        const {score, text} = this.state;
        console.log(this.props.item);
        // console.log(this.state);
        return (
            <div style={{marginTop: 40, borderRadius: 8}} className='resp'>

                    <CardContent>
                        <div className='box'><div style={{position: 'relative', top: 15}}><span style={{fontSize: 35, color: this.props.item.color }}>{score}</span>/10</div>
                        <div id = 'box-buttom'>{text}</div>
                        </div>

                    </CardContent>

            </div>
        )
    }
}

export default ListElemet