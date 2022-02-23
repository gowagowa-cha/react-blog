const initialState = {
  items: [],
  isLoading: false,	
};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        items: state.items.filter((obj) => obj.id !== action.payload.id),
      };

    case "SET_COMMENT":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
