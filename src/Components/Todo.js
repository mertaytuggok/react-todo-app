import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import styles from "../Css/Todo.module.css"
import { useSelector } from "react-redux"
import { addTodoHandle } from "../Utils"
import { useForm } from "react-hook-form";




export default function Todo() {


    const { register, handleSubmit } = useForm();
   

    const { user } = useSelector(state => state.Auth)
    const [todo, setTodo] = useState('')


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