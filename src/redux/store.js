import { createStore } from "redux";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Первая статья",
      imageUrl:
        "https://images.unsplash.com/photo-1636315393004-06053754029e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: 2,
      title: "Это вторая статья",
      imageUrl:
        "https://images.unsplash.com/photo-1636145401752-41d36a398a6b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis",
    },
  ],
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
  return state;
}

export const store = createStore(appReducer);
