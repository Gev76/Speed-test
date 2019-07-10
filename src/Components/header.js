import React from 'react';
import Layer1 from '../images/Layer1.png';
import Shape3 from '../images/Shape3.svg'


class Header extends React.Component {

    render() {
        return(
            <div id = 'header'>
                <div id = 'logo'>
                <img src={Layer1} />
                </div>

                <div className='text'>
                    <div>
                    <div>LucidScore.AI</div>
                    <div> [CompanyName]</div>
                    <div><span id = 'last'> [Logged in UserName]</span><img id = 'arrow' src={Shape3} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header