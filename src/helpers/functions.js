<<<<<<< HEAD
import axios from "axios";
import { ACCOUNT_API } from "./consts";

export const addDataToLocalStorage = (user, tokens) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const updateToken = () => {
  console.log("CHECK");
  let updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) return clearInreval(updateFunc);
    const Authorization = `Bearer ${tokens.access}`;
    let res = await axios.post(
      `${ACCOUNT_API}/api/token/refresh/`,
      { refresh: tokens.refresh },
      {
        headers: { Authorization },
      }
    );
    console.log(res);
  }, 3000);
};
=======
import axios from 'axios';
import { ACCOUNT_API } from './consts';

export const addDataToLocalStorage = (user, tokens) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const updateToken = () => {
    console.log('CHECK');
    let updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if(!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        let res = await axios.post(`${ACCOUNT_API}/api/token/refresh/`, { refresh: tokens.refresh }, { headers: { Authorization } });
        console.log(res);
        localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
    }, 3000);
};
>>>>>>> 6e373c271558663d285af799dea0cd9a7d4be795
