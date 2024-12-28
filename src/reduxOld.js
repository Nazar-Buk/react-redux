// actions.js

// export const increment = () => ({
//     type: 'INCREMENT'
//   });

//   export const decrement = () => ({
//     type: 'DECREMENT'
//   });

//   export const incrementByAmount = (amount) => ({
//     type: 'INCREMENT_BY_AMOUNT',
//     payload: amount
//   });

////////////////////////

// counterReducer.js

// const initialState = {
//     value: 0
//   };

//   const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state, value: state.value + 1 }; // роблю копію стану і змінюю значення value
//       case 'DECREMENT':
//         return { ...state, value: state.value - 1 }; // роблю копію стану і змінюю значення value
//       case 'INCREMENT_BY_AMOUNT':
//         return { ...state, value: state.value + action.payload }; // роблю копію стану і змінюю значення value
//       default:
//         return state;
//     }
//   };

//   export default counterReducer;

////////////////////////

// anotherReducer.js

// const initialAnotherState = {
//     anotherValue: 0
//   };

//   const anotherReducer = (state = initialAnotherState, action) => {
//     switch (action.type) {
//       // Define cases for anotherReducer if needed
//       default:
//         return state;
//     }
//   };

//   export default anotherReducer;
////////////////////////

// rootReducer.js

// import { combineReducers } from 'redux';
// import counterReducer from './counterReducer';
// import anotherReducer from './anotherReducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   another: anotherReducer
// });

// export default rootReducer;

////////////////////////

// store.js
// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer);

// export default store;
////////////////////////

// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

////////////////////////

// Counter.jsx

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "./actions";

// const Counter = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button
//           aria-label="Increment by 5"
//           onClick={() => dispatch(incrementByAmount(5))}
//         >
//           Increment by 5
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter;

////////////////////////
