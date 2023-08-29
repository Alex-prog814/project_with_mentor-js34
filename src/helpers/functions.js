export const addDataToLocalStorage = (user, tokens) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};