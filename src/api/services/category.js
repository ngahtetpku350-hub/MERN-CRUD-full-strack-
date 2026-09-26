import api from "../api";
import endpoints from "../endpoints";

export const create__category = async (data) => {
    const response = await api.post(endpoints.category.create, data)
    return response.data;
};

export const list__category = async (data) => {
    const response = await api.get(endpoints.category.list,data)
    return response.data;
}

export const delete__category = async (id) => {
    const response = await api.get(endpoints.category.delete(id));
    return response.data;
}