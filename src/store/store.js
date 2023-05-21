import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

// import postsReducer from '../reducers/postsReducer'
// import usersReducer from '../reducers/usersReducer'
// const usersReducer = (state ={counter: 0}, action) => {
//   return state;
// }
// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  reducer: { user: userReducer },
});

export default store;
