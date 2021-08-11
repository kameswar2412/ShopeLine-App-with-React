import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/actions/action';


export class Header extends Component {


  searchValue=(e) => {
    const {searchProduct=[]}=this.props
    const value=e.target.value
  let search =searchProduct.filter(v => v.name.toLowerCase().includes(value) === true || v.brand.toLowerCase().includes(value) === true )
 this.props.getProducts(search)

}


  render() {


    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between  top-bar-header">
   <Link className="navbar-brand fs-2"  to="/"><span style={{color: "#009688",
    letterSpacing: "1px",
    fontWeight: "900",fontSize:"25px"}} className="fs-4">SHOP</span>LANE</Link>

   <Link className="navbar-brand top-bar-text text-capitalize" to="/">Home</Link>
  
   <Link className=" navbar-brand top-bar-text text-capitalize " to="/"  >Clothings</Link>
   <Link  className="navbar-brand top-bar-text text-capitalize "to="/" >Accessories</Link>
   <form className="form-inline">
     <input className="form-control top-bar-text mr-sm-2" type="search"  onKeyUp={this.searchValue} placeholder="Search" aria-label="Search" />
   </form>

   <div>
     <Link to="/cart" style={{color:"black"}}  >
     <i className="fas fa-shopping-cart p-2"></i>
     <sup className="py-2" style={{color:"#009688",fontSize:"20px"}} >{this.props.cartValue}</sup>
     </Link>
   </div>
   <div>
   <i className="fas fa-user p-2  border border-dark border-3 rounded-circle "></i>

   </div>

 </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products:state.productReducer.products,
  cartValue:state.productReducer.cartValue,
  searchProduct:state.productReducer.searchProduct
})

const mapDispatchToProps = (dispatch)=>({

  getProducts: (payload)=>dispatch(getProducts(payload))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)




