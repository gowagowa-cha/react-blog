const initialState = {
  items: [],
  isLoading: false,	
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_POST":
      return {
        ...state,
        items: state.items.filter((obj) => obj.id !== action.payload.id),
      };

    case "SET_POSTS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
