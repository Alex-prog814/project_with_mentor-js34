import axios from "axios";
import { ACCOUNT_API } from "./consts";

export const addDataToLocalStoreg = (user, tokens) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const updateToken = () => {
    console.log("CHECK");
    let updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        if (!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        let res = await axios.post(
            `${ACCOUNT_API}/api/token/refresh/`,
            { refresh: tokens.refresh },
            { headers: { Authorization } }
        );

        localStorage.setItem(
            "tokens",
            JSON.stringify({
                refresh: tokens.refresh,
                access: res.data.access,
            }),
            console.log(res)
        );
    }, 6000 * 10 * 9);
};

export const logout = () => {
    localStorage.clear();
};

export const checkUserLogin = () => {
    let user = localStorage.getItem("user");
    if (!user) return false;
    return true;
};
