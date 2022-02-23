import { createStore, combineReducers } from "redux";
import { commentsReducer } from './Reducers/Comments';
import { postsReducer } from './Reducers/Posts';

const rootReducer = combineReducers({
	posts: postsReducer,
	comments: commentsReducer,
})
export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
window.store = store
