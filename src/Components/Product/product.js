import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cartLength, cartProducts } from '../../redux/actions/action'
import { amount } from '../../redux/actions/action'




export class Product extends Component {
  constructor(props){
    super(props);
    this.state={
      id:props.match.params.id,
      productData:[],
      photos:{},
      preview:{},
      class:["active"],
      class1:[],
      class2:[],
      class3:[],
      class4:[],

      
    }
// console.log(this.props.cart)
  }
   
  componentDidMount(){
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+this.state.id)
    .then((res)=>this.setState({productData:res.data,
           photos:res.data.photos,
           preview:res.data.preview,
           
    }))

  }
  

  dataHandle=()=>{

    this.props.amount(this.state.productData.price)
    this.props.cartLength(+1)
    const {price,preview,id,name,count=1}=this.state.productData
    this.props.cartProducts({price,preview,id,name,count}) 
  }
   handingEvent=(val)=>{ 
    const cal="active"
    this.setState({preview:val.target.src,class:cal,class1:"",class2:"",class3:"",class4:"",})

  }
  handingEvent1=(val)=>{ 
    const cal="active"
    this.setState({preview:val.target.src,class:"",class1:cal,class2:"",class3:"",class4:"",})

  }
  handingEvent2=(val)=>{ 
    const cal="active"
    this.setState({preview:val.target.src,class:"",class1:"",class2:cal,class3:"",class4:"",})

  }
  handingEvent3=(val)=>{ 
    const cal="active"
    this.setState({preview:val.target.src,class:"",class1:"",class2:"",class3:cal,class4:"",})

  }
  handingEvent4=(val)=>{ 
    const cal="active"
    this.setState({preview:val.target.src,class:"",class1:"",class2:"",class3:"",class4:cal,})

  }
  
  render() {
    
    const {id,name,brand,price,description}=this.state.productData


    return (
      <div key={id}>
        
             <section id="product " className="card-deck" >
       <div className="left-column p-4">
         <img className="product-preview"  src={this.state.preview} alt={id} />
       </div>
       <div className="right-column p-4">
         <div className="product-description">
           <h1 id="name">{name}</h1>
           <h4 id="brand">{brand}</h4>
           <h3>Price: Rs <span id="price">{price}</span></h3>
           <div className="description">
             <h3>Description</h3>
             <p id="description">
                 {description}
                 </p>
           </div>
           <div className="product-preview ">
             <h3>Product Preview</h3>
             <div >
             </div>
             <div className="previewImg">

                 <img onClick={this.handingEvent} id="0" className={`${this.state.class} `} src={this.state.photos[0]} alt="" />
                 <img onClick={this.handingEvent1} id="1" className= {`${this.state.class1}`}   src={this.state.photos[1]} alt="" />
                 <img onClick={this.handingEvent2} id="2" className= {`${this.state.class2}`} src={this.state.photos[2]} alt="" />
                 <img onClick={this.handingEvent3} id="3" className= {`${this.state.class3}`}  src={this.state.photos[3]} alt="" />
                 <img onClick={this.handingEvent4} id="4" className= {`${this.state.class4}`}  src={this.state.photos[4]} alt="" />
             </div>
           </div>
         </div>
           <div className="btn">
    
             <button id="add-to-cart" onClick={this.dataHandle}  >Add to Cart</button>
           </div>
       </div>
     </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
  cart:state.productReducer.cart,
  
})

const mapDispatchToProps=(dispatch)=>({

   cartProducts: (payload) => dispatch(cartProducts(payload)),
   amount:(payload) => dispatch(amount(payload)),
   cartLength:(payload) =>dispatch(cartLength(payload))


})

export default connect(mapStateToProps, mapDispatchToProps)(Product)

