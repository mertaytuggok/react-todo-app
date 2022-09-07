import { useState } from "react"
import { editTodo } from "../Stores/Todo"
import { useDispatch } from "react-redux/es/exports"
import { useForm } from "react-hook-form";



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
                    type="text"
                    value={todo}
                    onChange={e => setTodo(e.target.value)} />
                <label>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={e => setDone(e.target.value)} />
                    Tamamlandı Olarak İşaretle
                </label>
                <button
                    type="submit">
                    Kaydet
                </button>
            </form>
            <button
                onClick={close}>
                Kapat
            </button>
        </div>
    )
}