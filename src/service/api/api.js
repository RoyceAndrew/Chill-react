import axios from "axios";
import { editUser, deleteUser } from "../../store/redux/counterUser";
import { store } from "../../store/redux/store";

const api = import.meta.env.VITE_REACT_APP_API_LINK;

export const getData = async () => {
    try {
    return await axios.get(`${api}/users`)
    } catch (error) {
        console.error("Error getting data:", error);
        throw error;
    }
};

export const upData = async (id, data) => {
    try {
        await axios.put(`${api}/users/${id}`, data);
        store.dispatch(editUser(data)); 
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
};

export const delData = async (id) => {
    try {
        await axios.delete(`${api}/users/${id}`);
        store.dispatch(deleteUser());
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
    }
};

export const postData = async (data) => {
    try {
        return await axios.post(`${api}/users`, data);
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};

export const postWatch = async (id, data) => {
    try {
        await axios.put(`${api}/users/${id}`, data);
        store.dispatch(editUser(data));
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};