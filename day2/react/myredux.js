
const init = {
    counter:0
}

//action
const incCount={type:'INC_COUNT',payload:1}

//reducer
const reducer=(store,{type,payload})=>{
    switch(type){
        case 'INC_COUNT':
            return {...store,counter:store.counter+payload}
            default:
                return store;
    }
}

class Store {
   //TODO :implement
   constructor(reducer , init){
       this.reducer  =reducer;
       this.store = init
   }

   getState() {
       return this.store
   }

   dispatch(action) {
       this.store = this.reducer(this.store , action)
   }
}

const store = new Store(reducer , init)

console.log(store.getState())

store.dispatch(incCount)

console.log(store.getState())