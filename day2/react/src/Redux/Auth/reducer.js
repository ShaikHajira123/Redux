
import { ISAUTH } from "./action"

const init = {isauth:false}

export const authReducer = (store = init,{type,payload}) => {
    switch(type){
        case ISAUTH :
            return {
                isauth:payload.isauth ? true : false,
        };
        default:
            return store
    }
}