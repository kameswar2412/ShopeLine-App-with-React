import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Payment extends Component {
    render() {
        return (
            <div style={{marginTop: "60px",
                marginBottom: "60px",
                textAlign: "center"}}>
                <img src="https://shoplane.netlify.app/img/img_confirm.png" alt="paymeny-img" height="300px" />
                <p className="h3">Order Placed Successfully !! </p>
                <p>We have sent you an email with the order details</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps =(dispatch)=>({

})
    
    


export default connect(mapStateToProps, mapDispatchToProps)(Payment)
