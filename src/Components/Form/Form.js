import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
            this.state = {
                product_name: '',
                price: '',
                img: ''
            }
        // this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleChange(event){
        this.setState({product_name: event.target.product_name})
    }
    handleChange(event){
        this.setState({price: event.target.price})
    }
    handleChange(event){
        this.setState({img: event.target.img})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="input-1" type="text" value={this.state.product_name} onChange={this.handleChange} placeholder="Product Name"/>
                    <br></br>
                    <input className="input-2" type="text" value={this.state.price} onChange={this.handleChange} placeholder="Price"/>
                    <br></br>
                    <input className="input-3" type="text" value={this.state.img} onChange={this.handleChange} placeholder="Image"/>
                    <br></br>
                    <br></br>

                    <button className="button-1" type="text">Cancel</button>
                    <button className="button-2" type="submit">Add to Inventory</button>
                </form>
                
            </div> 
        )
    }
}

export default Form;