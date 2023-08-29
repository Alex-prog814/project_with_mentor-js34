import React, { useState, useEffect } from "react";
import style from "./acc_form.module.css";

import { CircularProgress, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/user/userActions";
import { clearStatusState, clearUserState } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState);
    dispatch(clearUserState);
  }, []);

  return (
    <>
      {loading ? (
        <Box style={{ display: "flex" }}>
          <CircularProgress />
        </Box>
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
                        onClick={() => dispatch(clearStatusState())}
                      >
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

                    <button
                      onClick={() => dispatch(loginUser({ user, navigate }))}
                      className={style.registerBtn}
                    >
                      Login
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

export default Login;
