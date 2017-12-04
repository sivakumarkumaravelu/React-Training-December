import React from 'react'
import ReactDOM from 'react-dom'

import {createStore,combineReducers,applyMiddleware} from "redux"
import logger from 'redux-logger'
import {Provider} from 'react-redux'

//For view we need entry point.
import App from './components/App'

//reducer takes action type and payload. action has action type and payload.

//1.Create the store
//2.Attach the reducer with the default or initial state, initial state can even come from old store
//3.Subscribe the store, then only latest update will come
//4.Dispatch the action, reducers are called. 


//Level 1, passing just one value
/*const reducer=(state,action)=> {
    switch (action.type){
        case "ADD":
        state=state+action.payload; //10+1
        break;
        case "SUBTRACT":
        state=state-action.payload;
        break;
    }
    
    return state;
}

const store=createStore(reducer,1); //1 is initial state
store.subscribe(()=>{
    console.log("store updated",store.getState())
}
)

store.dispatch({
    type: "ADD",
    payload: 10
}
)

store.dispatch({
    type: "SUBTRACT",
    payload: 5
}
)*/

//Level 2, working with Objects/Arrays in Redux

//state gets all properties of state with spread operator and update state in immutable way

/*const initialState = {
    result:1,
    lastValues: [] 
}

const reducer = (state=initialState,action)=>{

    switch(action.type){

        case "ADD":
        state.result += action.payload;
        state.lastValues.push(action.payload);
        break;

        case "SUBTRACT":
        state.result -= action.payload;
        state.lastValues.push(action.payload);
        break;

    }
    return state;
}

const store=createStore(reducer) //1 is initial state
store.subscribe(()=>{
    console.log("store updated",store.getState())
}
)

store.dispatch({
    type: "ADD",
    payload: 10
}
)

store.dispatch({
    type: "SUBTRACT",
    payload: 5
}
)*/

//Level 3, Muliple reducers

/*const initialState = {
    result:1,
    lastValues: [] 
}

const mathReducer = (state=initialState,action)=>{
    
        switch(action.type){
    
            case "ADD":
            state.result += action.payload;
            state.lastValues.push(action.payload);
            break;
    
            case "SUBTRACT":
            state.result -= action.payload;
            state.lastValues.push(action.payload);
            break;
    
        }
        return state;
    }
    

const userReducer = (state = {  name:'Siva',  age: 50 }, action)=>{
    switch(action.type){
        case "SET_NAME":
        state.name = action.payload;
        break;

        case "SET_AGE":
        state.age=action.payload;
        break;
    }
    return state;
    
}

const store = createStore(combineReducers({mathReducer,userReducer}))

store.subscribe(()=>{
    console.log("store updated",store.getState())
}
)

store.dispatch({
    type: "ADD",
    payload: 10
}
)

store.dispatch({
    type: "SUBTRACT",
    payload: 5
})

store.dispatch({
    type: "SET_NAME",
    payload: "SIVA"
})

store.dispatch({
    type: "SET_AGE",
    payload: 20
})
*/

//Level 4, middleware

const initialState = {
    result:1,
    lastValues: [] 
}

const mathReducer = (state=initialState,action)=>{
    
        switch(action.type){
    
            case "ADD":
            state.result += action.payload;
            state.lastValues.push(action.payload);
            break;
    
            case "SUBTRACT":
            state.result -= action.payload;
            state.lastValues.push(action.payload);
            break;
    
        }
        return state;
    }
    

const userReducer = (state = {  name:'Siva',  age: 50 }, action)=>{
    switch(action.type){
        case "SET_NAME":
        state.name = action.payload;
        break;

        case "SET_AGE":
        state.age=action.payload;
        break;
    }
    return state;
    
}

const store = createStore(combineReducers({mathReducer,userReducer}),
     {},
     applyMiddleware(logger()) //try with logger for clarity
)

store.subscribe(()=>{
    console.log("store updated",store.getState())
}
)

store.dispatch({
    type: "ADD",
    payload: 10
}
)

store.dispatch({
    type: "SUBTRACT",
    payload: 5
})

store.dispatch({
    type: "SET_NAME",
    payload: "SIVA"
})

store.dispatch({
    type: "SET_AGE",
    payload: 20
})

//Level 5 React with Redux
// npm install react-redux --save (react-redux is bridge between both)
//connect store with provider with app
// which property and which action we have to use we need to tell

ReactDOM.render(
    <Provider store={store} >
    <App/>
    </Provider>,
    window.document.getElementById("root")
);