import styles from "../Css/Header.module.css"
import { useDispatch, useSelector } from "react-redux"
import { loginHandle, logoutHandle } from "../Utils"
import { setDarkMode } from "../Stores/Theme"
import {BsSun} from "react-icons/bs"
import {FaMoon} from "react-icons/fa"



export default function Header() {

    const dispatch = useDispatch()
    const { dark } = useSelector(state => state.Theme)
    const { user } = useSelector(state => state.Auth)

    const login = user => {
        loginHandle(user)
    }
    


    return (
        <div>

            <header className={styles.Header}>
                <p className={styles.LogoT}>
                    TODO
                </p>
                <p className={styles.LogoA}>
                APP
                </p>
                <button className={styles.Theme} onClick={() => dispatch(setDarkMode())}>
                    {dark ? <BsSun size={30} /> : <FaMoon size={30} />}
                </button>
                {user  && (
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