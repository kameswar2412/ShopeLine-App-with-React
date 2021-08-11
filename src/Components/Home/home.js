
import axios from 'axios'

import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getProducts, search } from '../../redux/actions/action'
import Accessories from '../Accessories/accessories';

import Clothing from '../Clothing/clothing';

import 'antd/dist/antd.css';
import { Carousel } from 'antd';



export class Home extends Component {

componentDidMount(){

    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")

    .then((res)=>(this.props.getProducts(res.data),this.props.search(res.data)))

}

    render() {
      const contentStyle = {
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
        const {products=[]}=this.props
        return (

    <div>
      <div className="pt-5">
      <Carousel autoplay>
    <div>
      <img style={contentStyle} width="100%"  src="https://shoplane.netlify.app/img/img1.png" alt="img-1" />
    </div>
    <div>
      <img style={contentStyle} width="100%" src="https://shoplane.netlify.app/img/img2.png" alt="img-2" />

    </div>
    <div>
    <img style={contentStyle} width="100%" src="https://shoplane.netlify.app/img/img3.png" alt="img-3" />

    </div>
    <div>
      <img style={contentStyle} width="100%" src="https://shoplane.netlify.app/img/img4.png" alt="img-4" />

    </div>
  </Carousel>
      </div>
        <div className=" pt-4 d-flex flex-wrap justify-content-around ">
      <div className=" item-container-wrapper">
        <div className="img-wrapper ">
          <img src="https://shoplane.netlify.app/img/icon1.png" alt="" />
        </div>
        <p className="h6  pt-4">Free Delivery</p>
      </div>
      <div className=" item-container-wrapper">
        <div className="img-wrapper">
          <img src="https://shoplane.netlify.app/img/icon2.png" alt="" />
        </div>
        <p className="h6  pt-4">Money Back Gurantee</p>
      </div>
      <div className=" item-container-wrapper">
        <div className="img-wrapper">
          <img src="https://shoplane.netlify.app/img/icon3.png" alt="" />
        </div>
        <p className="h6  pt-4">Always Support</p>
      </div>
      <div className=" item-container-wrapper">
        <div className="img-wrapper" >
          <img src="https://shoplane.netlify.app/img/icon4.png" alt="" />
        </div>
        <p className="h6  pt-4">Secure Payment</p>
      </div>

        </div>
        <p className="p pt-1  h4">Clothing for Men and Women</p>

         <div className="d-flex flex-wrap  pb-2   ">
             {products.length ? products.map((item,index)=>(
             
                 <Clothing {...item} key={index}  />
            
             )) : " " }
            
         </div>
        <p className="p pt-1  h4">Accessories for Men and Women</p >
          <div className="d-flex flex-wrap  pb-2   " >
          {products.length ? products.map((item,index)=>(
             
             <Accessories {...item} key={index}  />
        
           )) : " " }
           </div>

    </div>

        )
    }
}

const mapStateToProps = (state) => ({

    products:state.productReducer.products

})

const mapDispatchToProps=(dispatch)=>({

    getProducts: (payload) => dispatch(getProducts(payload)),
    search:(payload)=>dispatch(search(payload))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)



