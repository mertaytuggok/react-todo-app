import styles from  "../Css/List.module.css"
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux/es/exports"
import { useState } from "react";


export default function List() {

    const {todos} = useSelector(state => state.Todo)

    return(
       
            <div className={styles.Box}>

                <ul >
                    {todos.map((todo, key) => <TodoItem  key={key} todo={todo} /> )}
                </ul>  
                
            </div>
    )
}