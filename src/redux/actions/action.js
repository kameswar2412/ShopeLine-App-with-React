export const getProducts = (payload) => ({
    
    type: "GET_PRODUCTS",

    payload
})

export const cartProducts= (payload) =>( {
    type:"CART_PRODUCTS",
    
    payload

})
export const cartLength = (payload) => ({
    type: "CART_VALUE",
    payload
})
export const amount = (payload) => ({
    type: "TOTAL_AMOUNT",
    payload
})

export const search = (payload) =>({
    type : "SEARCH_PRODUCTS" ,
    payload
})