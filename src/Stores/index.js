import { configureStore } from "@reduxjs/toolkit";
import Todo from "./Todo";
import Auth from "./Auth";
import Modal from "./Modal";
import Theme from "./Theme";

const store = configureStore({
  reducer: {
    Todo,
    Auth,
    Modal,
    Theme,
  },
});

export default store;
