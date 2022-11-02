import Header from "./Components/Header";
import Todo from "./Components/Todo";
import List from "./Components/List";
import Modal from "./Components/Modal";
import { useSelector } from "react-redux";
import "./Utils";
import Login from "./Pages/Login";
import { selectUser } from "./Stores/Auth";

function App() {
  const user = useSelector(selectUser);
  const { dark } = useSelector((state) => state.Theme);
  const { open } = useSelector((state) => state.Modal);

  return (
    <div className="App">
      <div className={dark ? "dark" : "light"}>
        {user ? (
          <>
            <Header />
            <Todo />
            <List />
          </>
        ) : (
          <Login />
        )}
        {open && <Modal />}
      </div>
    </div>
  );
}

export default App;
