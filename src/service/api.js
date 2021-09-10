import axios from "axios";

const url = "https://blogwebsite77.herokuapp.com";

export const uploadFile = async (data) => {
    console.log(data);
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log("Error while calling uploadFile API ", error);
    }
};

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log("Error while calling createPost API ", error);
    }
};

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${url}/posts${param}`);
        console.log(param, "param value");
        return response.data;
    } catch (error) {
        console.log("Error while calling getPosts API ", error);
    }
};

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getPost API ", error);
    }
};

export const updatePost = async (id, post) => {
    try {
        return await axios.post(`${url}/update/${id}`, post);
    } catch (error) {
        console.log("Error while calling updatePost API ", error);
    }
};

export const deletePost = async (id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch (error) {
        console.log("Error while calling deletePost API ", error);
    }
};

export const newComment = async (comment) => {
    try {
        return await axios.post(`${url}/comment/new/`, comment);
    } catch (error) {
        console.log("Error while calling newComment API ", error);
    }
};

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${url}/comments/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getComments API ", error);
    }
};

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    } catch (error) {
        console.log("Error while calling deleteComments API ", error);
    }
};
