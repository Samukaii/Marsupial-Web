import axios from "axios";
require("dotenv/config");

export const Api = axios.create({
    baseURL: "https://marsupialapi.herokuapp.com",
    headers: {
        "x-access-token": isAuth()
    }
});

export const login = async ({ email, password }) => {
    const login = await Api.post("/auth/login", { email, password });
    if (login.data.error) throw new Error(login.data.error);
    saveToken(login.data.token);
};

function saveToken(token) {
    const actualDate = new Date();
    actualDate.setDate(actualDate.getDate() + 1);

    const tokenInfo = {
        token: token,
        expires: actualDate
    };
    localStorage.setItem("authToken", JSON.stringify(tokenInfo));
}
//ele
//
export function isAuth() {
    const tokenInfo = JSON.parse(localStorage.getItem("authToken"));

    if (!tokenInfo) return false;

    if (!tokenInfo.token) return false;

    if (isExpiredDate(tokenInfo.expires)) return false;

    return tokenInfo.token;
}

function isExpiredDate(date) {
    return date <= new Date();
}

export const register = async ({ email, name, password }) => {
    let registered;
    try {
        registered = await Api.post("/auth/register", {
            email,
            name,
            password
        });
        login(email, password);
    } catch (error) {
        console.log(registered);
    }
};

export default Api;