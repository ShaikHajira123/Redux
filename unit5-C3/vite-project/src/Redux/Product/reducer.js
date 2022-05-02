import { ADD_PRODUCT } from "./action";
import { SORT } from "./action";

const init = {orders:[]};

export const productReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
     return {...store,orders:payload} ;
     case SORT :
            return {...store, orders:[...store.orders].sort((a,b)=>
                a[payload]>b[payload] ? 1 : a[payload]<b[payload] ?-1:0
            ),
        };
    
    default:
      return store;
  }
};