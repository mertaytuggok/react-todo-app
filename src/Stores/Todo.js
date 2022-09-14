import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: []
}

const API_URL = "https://630cc89e83986f74a7ca6c9a.mockapi.io/todos";


export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get(
    "https://630cc89e83986f74a7ca6c9a.mockapi.io/todos"
  );
  console.log(response)
  return response.data;
});

export const todoDelete = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(API_URL + `/${id}`);
});

export const createTodo = createAsyncThunk("todos/createTodo", async (todo) => {
  await axios.post(`https://630cc89e83986f74a7ca6c9a.mockapi.io/todos/`,{
    content: todo});
});
export const todoEdit = createAsyncThunk(
  "todos/editTodo",
  async (todoID, form) => {
    const response = await axios.put(API_URL + `/${todoID}`, form);
    return response.data;
  }
);

const todos = createSlice({

  name: 'todos',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    addTodo: ((state, action) => {
      state.todos = [
        action.payload,
        ...state.todos
      ]

    }),
    editTodo: ((state, action) => {
      state.todos = state.todos.map(todo => {
        if (action.payload.id == todo.id) {
          todo.title = action.payload.title
          todo.done = action.payload.done
        }
        return todo
      })
    }),
    deleteTodo: ((state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload || [];
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isError = action.error.message;
      });

  }
})

export const { addTodo, deleteTodo, editTodo, setUserName } = todos.actions
export default todos.reducer
