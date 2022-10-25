import axios from "axios";
const USER_URL = "http://localhost:8080/api/v1";

export const signUp = (requestData) => {
    return axios({
        method: "POST",
        url: `${USER_URL}/signUp`,
        data: requestData,
    });
};