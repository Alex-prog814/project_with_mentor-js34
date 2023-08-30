import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/user/userActions";
import { clearStatusState } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import style from "./acc_form.module.css";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const { loading, status } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearStatusState());
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <Box style={{ display: "flex" }}>
                        <CircularProgress />
                    </Box>
                </>
            ) : (
                <>
                    {status ? (
                        <>
                            {status === "error" && (
                                <>
                                    <div className={style.errorcenter}>
                                        <div className={style.errorBlock}>
                                            <h3>An error occured!</h3>
                                            <button
                                                className={style.registerBtn}
                                                onClick={() =>
                                                    dispatch(clearStatusState())
                                                }>
                                                Try again!
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={style.reg_center}>
                                <div className={style.registerDivValue}>
                                    Register form
                                </div>
                            </div>

                            <div className={style.regBlockCentr}>
                                <div className={style.regBlock}>
                                    <div className={style.leftregPart}>
                                        <img
                                            src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="eror"
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

                                        <button
                                            className={style.registerBtn}
                                            onClick={() =>
                                                dispatch(
                                                    registerUser({
                                                        user,
                                                        navigate,
                                                    })
                                                )
                                            }>
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Register;
