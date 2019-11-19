import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Header extends Component {
    
    
    
    render(){
        return(
            <div>
                <h1>
                    Shelfie
                </h1>
                <Link to='/'><button>Dashboard</button></Link>
                <Link to='/Form'><button>Add Inventory</button></Link>
            </div>
        )
    }
}

export default Header;