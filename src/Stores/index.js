import { configureStore } from "@reduxjs/toolkit";
import Todo from "./Todo";
import Auth from "./Auth";
import Modal from "./Modal";

const store = configureStore({
    reducer: {
        Todo,
        Auth,
        Modal,
    }
})

export default store