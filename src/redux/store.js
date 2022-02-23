import { createStore } from "redux";

const initialState = {
  posts: [],
  comments: [],
  searchValue: "",
};

function appReducer(state = initialState, action) {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };
  }
  if (action.type === "REMOVE_POST") {
    return {
      ...state,
      posts: state.posts.filter((obj) => obj.id !== action.payload.id),
    };
	}
  if (action.type === "SET_POSTS") {
    return {
      ...state,
      posts: action.payload
    };
  }
  return state;
}

export const store = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
window.store = store
