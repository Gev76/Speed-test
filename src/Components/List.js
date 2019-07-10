import React from 'react';
import ListElement from './List element'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj: [{score: 2.2, text: 'Identify', color: ''},
                {score: 3.1, text: 'Detect', color: ''},
                {score: 5.1, text: 'Protect', color: ''},
                {score: 6.7, text: 'Respond', color: '' },
                {score: 3.4, text:'Recover', color: '' }]
        }
    }

    render() {
        const {obj} = this.state;
        return(<div id = 'container'>
                <div className = 'flex'></div>
            <div className='sides'>
            <div id = 'list'>
                {obj.map(obj => {
                    if (obj.score <= 3.3) {
                        obj.color = '#21C393'
                    } else if (obj.score >= 3.3 && obj.score <= 6.6){
                        obj.color = 'orange'
                    } else if (obj.score > 6.6 && obj.score <= 10){
                        obj.color = 'red'
                    }
                    return <ListElement item = {obj} />
                })
                }
            </div>
                </div>
                <div className='flex'></div>
            </div>
        )
    }

}

export default List
