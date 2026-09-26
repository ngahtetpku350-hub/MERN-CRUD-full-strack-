import api from "../api";
import endpoints from "../endpoints";

export const register = async (data) => {
    const response = await api.post(endpoints.users.create, data)
    return response.data;
};

export const login = async (data) => {
    const response = await api.post(endpoints.users.login, data)
    return response.data;
}

