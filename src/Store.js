import {configureStore, createSlice} from '@reduxjs/toolkit'


const state = {
    balance: 100,
    name: "",
    mobile: null
}

const transcation = []

const userSlice = createSlice({
    name: 'user',
    initialState: state,
    reducers: {
        updateName: (state,action)=>{
            state.name = action.payload
        },
        updateMobile: (state,action)=>{
            state.mobile = action.payload
        },
        deposit: (state,action)=>{
            state.balance+= +action.payload
        },
        withdraw: (state,action)=>{
            state.balance-= action.payload
        }
    }
})

const userTrans = createSlice({
    name: 'trans',
    initialState: transcation,
    reducers: {
        addTrans : (state,action)=>{
            state.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        trans: userTrans.reducer
    }
})


export default store

export const {updateName,updateMobile,deposit,withdraw,} = userSlice.actions
export const {addTrans} = userTrans.actions


















// import {createStore,combineReducers} from 'redux'


// const initialState = {
//     balance: 100,
//     name: "",
//     mobile: null
// } 

// const arr = []


// const accountReducer = (state=initialState,action) =>{

//     switch (action.type) {
//         case "deposit":
//             return {...state,balance: state.balance + +action.payload }
//         case "withdraw":
//             return {...state,balance: state.balance - +action.payload }        
//         case "nameupdate":
//             return {...state,name: action.payload } 
//         case "mobileupdate":
//                 return {...state,mobile: action.payload } 
//         default:
//             return state;
//     }
// }

// const transReducer = (state=arr,action) =>{

//     switch (action.type) {
//         case "ADD":
//             return [...state,{id:action.payload.id,amount: action.payload.amount, type: action.payload.type, date: action.payload.date} ]
//         default:
//             return state;
//     }
// }

// let rootReducers = combineReducers(
//     {
//         account : accountReducer,
//         trans : transReducer
//     }
// )

// const store = createStore(rootReducers)
// console.log(store.getState());

// export default store;

// data.dispatch({type:"deposit",payload:1000})
// console.log(data.getState());

// data.dispatch({type:"withdraw",payload:100})
// console.log(data.getState());

// data.dispatch({type:"nameupdate",payload:"sudhakar"})
// console.log(data.getState());

// data.dispatch({type:"mobileupdate",payload:5678220})
// console.log(data.getState());