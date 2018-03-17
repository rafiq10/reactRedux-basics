// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import Main from './components/Main';
// import User from './components/User';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Rafal"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Main changeUsername={this.changeUsername.bind(this)} />
//                 <br />
//                 <User username={this.state.username} />
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore, combineReducers } from 'redux';


const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Rafal",
    age: 27
}, action) => {
    switch (action.type){
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

const store = createStore(combineReducers({mathReducer,userReducer}));

store.subscribe(() => {
    console.log("Store updated", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBTRACT",
    payload: 3
});

store.dispatch({
    type: "SET_NAME",
    payload: "Vero"
});

store.dispatch({
    type: "SET_AGE",
    payload: 33
});