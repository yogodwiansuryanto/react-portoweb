import axios from "axios";

export const fetchApi = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/Experience`);
    if (data) {
        return data;

    }
}

export const postData = async (params) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}contact`, {
        userName: params.userName,
        userEmail: params.userEmail,
        message: params.message
    })

    return data
}