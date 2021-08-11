import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { amount, cartLength, cartProducts } from '../../redux/actions/action'


export class Cart extends Component {


    cartHandle=(e)=>{ 
        // console.log(e)
        alert("order placed successsfully !!")
const {cart=[]}=this.props
const cartLength=cart.length
        this.props.cartProducts( cart.splice(0,cartLength) )
        
        this.props.amount(-this.props.total)
        this.props.cartLength(-this.props.cartValue)

    }


    render() {
    const {cart=[]}=this.props

    
        return (
            <div className="pt-4" style={{width:"100%"}}>
                <p className="h2"> Checkout</p>
                <p className="h5">Total Items: <span>{this.props.cartValue}</span></p>
            <div className="d-flex cart-detetains-poi p-4" >
               <div className=" w-75">
                  {cart.map(({name,preview,price,count},index)=>(

               <div className="d-flex p-2 rounded border border-light m-1 right-column " key={index}>
                   <div>
                       <img src={preview} alt="" width="100px" />
                   </div>
                   <div className="p-4">
                       <p>{name}</p>
                       <p className="h6">X <span>{count}</span></p>
                       <p className="h6">Amount: <span> {price} </span></p>
                   </div>
               </div>
                 )) }  

               </div>
               <div className="w-25  ">
                   <p className="h3 p-2">Total Amount</p>
                   <p className="h5 p-2"> Total Amount : Rs <span>{this.props.total}</span></p>
                   <Link to="/Payment">
                       <div className="btn">
                         <button onClick={this.cartHandle} >Place Order</button>
                       </div>
                   </Link>
               </div>
           </div>
    
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
    cart:state.productReducer.cart,
    total:state.productReducer.total,
    cartValue:state.productReducer.cartValue
    
})

const mapDispatchToProps = (dispatch)=>({
    cartProducts:(payload)=> dispatch(cartProducts(payload)),
    amount: (payload)=>dispatch(amount(payload)),
    cartLength:(payload)=>dispatch(cartLength(payload))
    

})
    // const mapDispatchToProps=(dispatch)=>({

    //     cartProducts: (payload) => dispatch(cartProducts(payload)),
    //     amount:(payload) => dispatch(amount(payload))
     
     
    //  })


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
