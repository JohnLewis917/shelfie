import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super(
            this.state = {
                product_name: '',
                price: 0,
                img: ''
              }
        )
    }
    render() {
        return (
            <div>
                <input className="input-1" type="text"></input>
                <input className="input-2" type="text"></input>
                <input className="input-3" type="text"></input>
                <button classname="button-1" type="text">Cancel</button>
                <button className="button-2" type="text">Add to Inventory</button>
                
            </div> 
        )
    }
}

export default Form;