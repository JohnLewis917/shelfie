import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

            this.state = {
                product_name: '',
                price: '',
                img: 'https://timedotcom.files.wordpress.com/2018/11/sweetfoam-sustainable-product.jpg?quality=85'
            }
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName= this.handleName.bind(this)
        this.handlePrice= this.handlePrice.bind(this)
        this.handleImg= this.handleImg.bind(this)
        
        
    }
    handleName(event){
        console.log(event)
        this.setState({product_name: event.target.product_name})
    }
    handlePrice(event){
        this.setState({price: event.target.price})
    }
    handleImg(event){
        this.setState({img: event.target.img})
    }
    buttonClick() {
        
        this.setState ={
        product_name: '',
        price: 0,
        img: ''
        }
        
    }
    render() {
        
        return (
            <div>
                <form id="form1">
                    <img src={this.state.img} height="150px" alt=""/>
                    <br></br>
                    <input className="input-3" type="text"  size="35" onChange={this.handleChange} placeholder="imageURL"/>
                    <br></br>
                    <input className="input-1" type="text"  size="35" onChange={this.handleChange} placeholder="Product Name"/>
                    <br></br>
                    <input className="input-2" type="text"  size="35" onChange={this.handleChange} placeholder="Price"/>
                    <br></br>
                    <br></br>

                    <button className="button-1" type="reset" onClick={() => this.buttonClick()}>Cancel</button>
                    <button className="button-2" type="submit" form="form1">Add to Inventory</button>
                </form>
                
            </div> 
        )
    }
}

export default Form;