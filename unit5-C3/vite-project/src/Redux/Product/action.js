
export const SORT = 'SORT'

export const ADD_PRODUCT = 'ADD_PRODUCT'
 export const addProducts=(data)=>{
    return {
        type:ADD_PRODUCT,
        payload:data,
        
    }
}

export const getOrders = () => async(dispatch)=>{
    const data = await fetch(`http://localhost:8080/orders`)
     .then((x)=>x.json())
     
     dispatch(addProducts(data))
     console.log(data)
 }

export const sort =(by)=>{
    return{
        type:SORT,
        payload:by
    }
}