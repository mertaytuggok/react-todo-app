import { addTodo } from "./Stores/Todo";
import { openModal } from "./Stores/Modal";
import { login, logout } from "./Stores/Auth";
import store from "./Stores";

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo));
};

export const loginHandle = (user) => {
  store.dispatch(login(user));
};

export const logoutHandle = () => {
  store.dispatch(logout());
};

export const modal = (name, data = false) => {
  store.dispatch(
    openModal({
      name,
      data,
    })
  );
};
