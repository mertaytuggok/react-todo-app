import { nanoid } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import styles from "../Css/Todo.module.css"
import { useDispatch, useSelector } from "react-redux"
import { addTodoHandle } from "../Utils"
import { useForm } from "react-hook-form";
import { createTodo, getTodos } from "../Stores/Todo"




export default function Todo() {


    const { register,formState: { errors },  handleSubmit } = useForm();
   
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.Auth)
    const [todo, setTodo] = useState('')

    useEffect(() => {
        dispatch(createTodo(todo)).then(() => {
            dispatch(getTodos());
          })
    }, [])



    const onSubmit = e => {
        addTodoHandle({
        title: todo,
        done: false,
        id: nanoid(),
        user: user.id
    })
    setTodo('')
    }


    



    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <p className={styles.errors}>
                 {errors.todo && <p>En Az 3 Karakter Giriniz..</p>}
                 </p>
            <input  
            {...register("todo", { required: true, minLength: 3 })}
                type="text"
                value={todo}
                className={styles.Input}
                onChange={e => setTodo(e.target.value)}
                placeholder="Todo Giriniz"
                 />

            <button
                type="submit"
                disabled={!todo || !user}
                className={styles.Button}>
                Ekle
            </button>
        </form >
    )
}