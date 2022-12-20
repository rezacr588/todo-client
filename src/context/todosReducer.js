export const initialState = {
  todos: [],
  completed: null,
};

const todosReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        todos: payload.products,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        todos: payload.products,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        todos: payload,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default todosReducer;
