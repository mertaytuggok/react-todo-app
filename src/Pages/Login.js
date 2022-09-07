import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from "../Css/Login.module.css"
import { useForm } from "react-hook-form";
import { login } from '../Stores/Auth';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = e => {
        dispatch(login({
            username: username
        }))
        localStorage.setItem("user", username)
    }

    const dispatch = useDispatch()
    const [username, setUserName] = useState("")





    return (
        <div className={styles.Modal}>
            <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("username", { required: true, minLength: 3 })}
                    type="name"
                    value={username}
                    className={styles.Input}
                    onChange={(e) => setUserName(e.target.value)} placeholder="Adınızı Giriniz.." />
                <button
                    type='submit'
                    disabled={!username}
                    className={styles.Button}>
                    Giriş Yap
                </button>
            </form>
        </div>
    )
}

export default Login