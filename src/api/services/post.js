import { resolvePath } from "react-router-dom";
import api from "../api";
import endpoints from "../endpoints"

export const postList = async (search) => {
    const response = await api.get(`${endpoints.posts.list}/?search=${search}`);
    return response.data;
    // console.log(response)
}

export const postCreate = async (data) => {
    const response = await api.post(endpoints.posts.create,data )
    return response.data;
};

export const postDetail = async (id) => {
    const response = await api.get(endpoints.posts.detail(id));
    console.log("API Response:", response);
    return response.data; 
}

export const postUpdate = async (id, data) => {
    const response = await api.put(endpoints.posts.update(id), data);
    return response.data;
}
export const postDelete = async (id) => {
    const response = await api.delete(endpoints.posts.delete(id))
    return response.data;
}