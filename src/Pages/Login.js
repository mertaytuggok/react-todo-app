import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Css/Login.module.css";
import { useForm } from "react-hook-form";
import { login } from "../Stores/Auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (e) => {
    dispatch(
      login({
        username: username,
      })
    );
  };

  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  return (
    <div className={styles.Modal}>
      <p className={styles.LogoT}>TODO</p>
      <p className={styles.LogoA}>APP</p>

      <form className={styles.inner} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true, minLength: 3 })}
          type="name"
          value={username}
          className={styles.Input}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Adınızı Giriniz.."
        />
        <button type="submit" disabled={!username} className={styles.Button}>
          Giriş Yap
        </button>
        <div className={styles.errors}>
          {errors.username && <p>En Az 3 Karakter Giriniz..</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
