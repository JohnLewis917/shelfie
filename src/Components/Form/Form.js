import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Form extends Component {
    constructor(props) {
        super(props)

            this.state = {
                product_name: '',
                price: '',
                img: 'https://timedotcom.files.wordpress.com/2018/11/sweetfoam-sustainable-product.jpg?quality=85'
            }
        
        this.handleName= this.handleName.bind(this)
        this.handlePrice= this.handlePrice.bind(this)
        this.handleImg= this.handleImg.bind(this)
        this.addInventory=this.addInventory.bind(this)
        
        
    }
    componentDidMount(){
        const {product_name, price, img} = this.props.currentObj
        this.setState({
            product_name: product_name,
            price: price,
            img: img
        })
    }
    handleName(event){
        this.setState({product_name: event.target.value})
        
    }
    handlePrice(event){
        this.setState({price: event.target.value})
    }
    handleImg(event){
        this.setState({img: event.target.value})
    }
    buttonClick() {
        this.setState ({
        product_name: '',
        price: 0,
        img: 'https://timedotcom.files.wordpress.com/2018/11/sweetfoam-sustainable-product.jpg?quality=85'
        })
        
    }
    
    addInventory(){
        axios.post('/api/Dashboard', this.state)
        .then(res => {
        this.props.history.push('/')
        })
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.addInventory}>
                    <img src={this.state.img} height="150px" alt=""/>
                    <br></br>
                    <input className="input-3" type="text"  value={this.state.img} size="35" onChange={this.handleImg} placeholder="imageURL"/>
                    <br></br>
                    <input className="input-1" type="text"   value={this.state.product_name} size="35"   onChange={this.handleName} placeholder="Product Name"/>
                    <br></br>
                    <input className="input-2" type="text"   value={this.state.price} size="35"  onChange={this.handlePrice} placeholder="Price"/>
                    <br></br>
                    <br></br>

                    <button className="button-1" type="reset" onClick={() => this.buttonClick()}>Cancel</button>
                    <button className="button-2" type="submit">Add to Inventory</button>
                    
                </form>
                
            </div> 
        )
    }
}

export default withRouter(Form);