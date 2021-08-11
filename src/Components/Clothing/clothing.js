import React from 'react';
import { Link } from 'react-router-dom';


const Clothing = (props) => {
    const {name,preview,id,brand,price,isAccessory}=props

    return ( 
        <div>
 {  (isAccessory === false) ? 
   <Link to={`/Product/${id}`} >
   <div className="card m-2  " style={{width: "225px",height:"470px"}}>
     <img className="card-img-top" style={{width: "100%"}} src={preview} alt={id} />
     <div className="card-body">
   <p className="card-text h5 text-dark" >{name}</p>
   <p className="card-text text-muted h6" >{brand}</p>
   <p className="px-2 h6 "style={{color:"#009688"}} > Rs<span className="px-2">{price}</span></p>
     </div>
   </div>
   </Link>
  : "" }
        </div>
     );
}
 
export default Clothing;