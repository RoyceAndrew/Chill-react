import axios from "axios";

const api = import.meta.env.VITE_REACT_APP_API_LINK;

export const getData = async () => await axios.get(`${api}/users`);

export const upData = async (id, data) => await axios.put(`${api}/users/${id}`, data);

export const delData = async (id) => await axios.delete(`${api}/users/${id}`);

export const postData = async (data) => await axios.post(`${api}/users`, data);