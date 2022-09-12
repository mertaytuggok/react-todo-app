import styles from "../Css/TodoItem.module.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../Stores/Todo"
import { modal } from "../Utils"


export default function TodoItem({ todo }) {



    const { dark } = useSelector(state => state.Theme)
    const { user } = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    const deleteHandle = () => {
        dispatch(deleteTodo(todo.id))

    }

    const editHandle = () => {
        modal('edit-todo', todo)


    }
    return (
        <li  className={dark ? 'dark' : 'light'}>
            <label>
                <input
                className={styles.Check}
                type="checkbox"
                ></input>
            </label>
            <span 
             className={styles.text}
            style={{ textDecoration: todo.done ? 'line-through' : false }} >
                {todo.title}
            </span>

            <>
                <button
                    onClick={editHandle}
                    className={styles.Edit}>
                    Düzenle
                </button>
                <button
                    onClick={deleteHandle}
                    className={styles.Delete}>
                    Sil
                </button>
            </>

        </li>



    )
}