import styles from "../Css/Header.module.css"
import { useSelector } from "react-redux"
import { loginHandle, logoutHandle } from "../Utils"
import { BsSun } from 'react-icons/bs'
import { useState } from "react"



export default function Header() {



    const { user } = useSelector(state => state.Auth)

    const login = user => {
        loginHandle(user)
    }



    return (
        <div>

            <header className={styles.Header}>
                <text className={styles.Logo}>
                    TODO APP
                </text>
                {user && (
                    <nav>
                        <text
                            className={styles.Button}>
                            Merhaba, {user.username}
                        </text>
                        <button
                            className={styles.Logout}
                            onClick={logoutHandle}>
                            Çıkış Yap
                        </button>
                    </nav>
                )}
            </header>
        </div>
    )
}