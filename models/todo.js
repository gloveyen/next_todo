import _ from "lodash";

//ACTION TYPE
export const INIT = "INIT";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const EDIT = "EDIT";

//ACTION CREATETOR
export function init(payload) {
  return {
    type: INIT,
    payload,
  };
}
export function addItem(payload) {
  return {
    type: ADD,
    payload,
  };
}
export function done(payload) {
  return {
    type: DONE,
    payload,
  };
}
export function deleteItem(payload) {
  const ensure = window.confirm("確定要刪除此項目嗎?");
  if (ensure) {
    return {
      type: DELETE,
      payload,
    };
  }
  return { type: "default" };
}
export function editItem(payload) {
  return {
    type: EDIT,
    payload,
  };
}

//REDUCER
const todoReducer = (state, action) => {
  switch (action.type) {
    case EDIT:
      const { id: editId } = action.payload;
      const index = state.todo.map((item) => item.id).indexOf(editId);
      const newTodoList = [...state.todo];
      newTodoList.splice(index, 1, { ...action.payload });
      return { ...state, todo: [...newTodoList] };

    case DELETE:
      const todoFilterByDeleteId = state.todo.filter(
        (item) => item.id !== action.payload
      );
      const doneFilterByDeleteId = state.done.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todo: [...todoFilterByDeleteId],
        done: [...doneFilterByDeleteId],
      };

    case DONE:
      return { ...state, done: [action.payload, ...state.done] };

    case ADD:
      const id = `t_${("0000" + _.random(1000)).slice(-4)}`;
      return { ...state, todo: [{ id, name: action.payload }, ...state.todo] };

    case INIT:
      return { ...state, todo: [...action.payload] };

    default:
      return { ...state };
  }
};

export default todoReducer;
