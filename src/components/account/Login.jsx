import React, { useState } from "react";
import style from "./acc_form.module.css";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    return (
        <>
            <div className={style.reg_center}>
                <div className={style.registerDivValue}>login form</div>
            </div>

            <div className={style.regBlockCentr}>
                <div className={style.regBlock}>
                    <div className={style.leftregPart}>
                        <img
                            src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fHww&w=1000&q=80"
                            alt=""
                        />
                    </div>
                    <div className={style.rightRegPart}>
                        <input
                            className={style.registerInp}
                            type="text"
                            placeholder="Username"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    username: e.target.value,
                                })
                            }
                        />

                        <input
                            className={style.registerInp}
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    password: e.target.value,
                                })
                            }
                        />
                        <input
                            className={style.registerInp}
                            type="password"
                            placeholder="Password confirm"
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    password: e.target.value,
                                })
                            }
                        />

                        <button className={style.registerBtn}>Register</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
