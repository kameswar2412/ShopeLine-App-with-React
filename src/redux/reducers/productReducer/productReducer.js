
const initialState = {

    products:[],
    searchProduct:[],


    cart:[],
    cartValue:0,
    total:0
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {

    switch (type) {

    case "GET_PRODUCTS":
           return { ...state, products:payload }

   case "SEARCH_PRODUCTS":
           return { ...state, searchProduct:payload }

    case "ADD_PRODUCTS":
            return { ...state, products:[...state.product,payload] }

    
  case "TOTAL_AMOUNT":
          return {...state,total:state.total+payload}

 case "CART_VALUE":
          return {...state,cartValue:state.cartValue+payload}

case "CART_PRODUCTS":
        
        var data
        state.cart.map(item=>data=item)

        return {...state,cart:  [ ...state.cart.length === 0 ? [...state.cart,payload] :(data.id===payload.id) ? state.cart.map(item=>{if(item.id===payload.id){  item.count+=payload.count } return item} )  :  [...state.cart,payload]    ]} 

                

    default:
            return state
    }
}


