

import { ISAUTH } from "./action"


const init={isAuth:false}
export const authReducer = (store =init,{type,payload}) => {
    switch(type){
        case ISAUTH :
            return {
               ...store, isAuth:payload.isAuth 
        };
        default:
            return store
    }
}