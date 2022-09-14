import styles from "../Css/TodoItem.module.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../Stores/Todo"
import { modal } from "../Utils"
import { useState } from 'react';


export default function TodoItem({ todo, data }) {



    const { dark } = useSelector(state => state.Theme)
    const { user } = useSelector(state => state.Auth)
    const [checked, setChecked] = useState(false)


    const handleChange = () => {
      setChecked(!checked)
    }

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
                checked={checked}
                onChange={handleChange}
                type="checkbox"
                />

            <span 
             className={styles.text}
            style={{ textDecoration: checked ? 'line-through' : false }} >
                {todo.title} 
            </span>
            </label>

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