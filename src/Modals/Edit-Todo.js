import { useState } from "react"
import { editTodo } from "../Stores/Todo"
import { useDispatch } from "react-redux/es/exports"
import { useForm } from "react-hook-form";
import styles from "../Css/Edit-todo.module.css"



export default function EditTodo({ data, close }) {

    const dispatch = useDispatch()
    const [todo, setTodo] = useState(data.title)
    const [done, setDone] = useState(data.done)
    const { register, handleSubmit } = useForm();


    const onSubmit = e => {
        dispatch(editTodo({
            id: data.id,
            title: todo,
            done
        }))
        close()
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("todo", { required: true, minLength: 3 })}
                    className={styles.text}
                    type="text"
                    value={todo}
                    onChange={e => setTodo(e.target.value)} />

                <button
                    className={styles.save}
                    type="submit">
                    Kaydet
                </button>
                <button
                className={styles.close}
                onClick={close}>
                Kapat
            </button>
            </form>
           
        </div>
    )
}