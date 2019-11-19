import React, {Component} from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Form extends Component {
    constructor(props) {
        super(props)
        const{id} = this.props.match.params

            this.state = {
                product_name: '',
                price: '',
                img: 'https://timedotcom.files.wordpress.com/2018/11/sweetfoam-sustainable-product.jpg?quality=85',
                isEditing: id ? true : false
            }
        
        this.handleName= this.handleName.bind(this)
        this.handlePrice= this.handlePrice.bind(this)
        this.handleImg= this.handleImg.bind(this)
        this.addInventory=this.addInventory.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.updateProduct=this.updateProduct.bind(this)
        
    }
    componentDidMount(){
        const{id} = this.props.match.params
        if (id){

            axios.get(`/api/Dashboard/${id}`)
            .then(res => {
                console.log(res.data)
                const [product] = res.data
                this.setState({
                    product_name: product.product_name,
                    price: product.price,
                    img: product.img,
                    id: id
                })
                // console.log(res.data)
                
            })
        }
         
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
        price: '',
        img: 'https://timedotcom.files.wordpress.com/2018/11/sweetfoam-sustainable-product.jpg?quality=85'
        })
        
    }
    addInventory(){
        axios.post('/api/Dashboard', this.state)
        .then(res => {
        this.props.history.push('/')
        })
    }
    updateProduct(){
        console.log(this.state.id, this.state)
        axios.put(`/api/Dashboard/${this.state.id}`, this.state)
        .then(res => {
        this.props.history.push('/')
        })
    }
    handleSubmit(){
        if (this.state.isEditing){
            this.updateProduct()
        }else {
            this.addInventory()
        }
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <button className="button-2" type="submit">{this.state.isEditing ? 'Save Changes': 'Add to Inventory'}</button>
                    
                </form>
                
            </div> 
        )
    }
}

export default withRouter(Form);