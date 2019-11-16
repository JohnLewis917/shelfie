import React, {Component} from 'react';
import axios from 'axios'


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
        this.setState({product_name: event.target})
    }
    handlePrice(event){
        this.setState({price: event.target})
    }
    handleImg(event){
        console.log(event)
        this.setState({img: event.target})
    }
    buttonClick() {
        this.setState ={
        product_name: '',
        price: 0,
        img: 'https://timedotcom.files.wordpress.com/2018/11/sweetfoam-sustainable-product.jpg?quality=85'
        }
        
    }
    addInventory(){
        axios.post('/api/Dashboard', this.props)
        .then(res => {
        this.props.history.push('/')
        })
    }
    render() {
        
        return (
            <div>
                <form id="form1">
                    <img src={this.state.img} height="150px" alt=""/>
                    <br></br>
                    <input className="input-3" type="text"   size="35" onChange={this.handleImg} placeholder="imageURL"/>
                    <br></br>
                    <input className="input-1" type="text"   size="35"  onChange={this.handleName} placeholder="Product Name"/>
                    <br></br>
                    <input className="input-2" type="text"   size="35"  onChange={this.handlePrice} placeholder="Price"/>
                    <br></br>
                    <br></br>

                    <button className="button-1" type="reset" onClick={() => this.buttonClick()}>Cancel</button>
                    <button className="button-2" type="submit" form="form1" onClick={this.addInventory}>Add to Inventory</button>
                    
                </form>
                
            </div> 
        )
    }
}

export default Form;