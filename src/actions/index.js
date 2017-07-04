import axios from 'axios'

const REQUEST_URL = 'http://192.168.100.3:3000';

export const fetchPosts = (callback) => {
    const request = axios.get(`${REQUEST_URL}/posts`)
        .then((response) => {
            callback();
            return response;
        });
    return {
        type: 'FETCH_POSTS',
        payload: request
    }
}

export const fetchPost = (id) => {
    const request = axios.get(`${REQUEST_URL}/posts/${id}`);
    return {
        type: 'FETCH_POST',
        payload: request
    }
}

export const changePostTitle = (title) => {
    return {
        type: 'CHANGE_POST_TITLE',
        payload: title
    }
}

export const changePostBody = (body) => {
    return {
        type: 'CHANGE_POST_BODY',
        payload: body
    }
}

export const createPost = (post) => {
    const request = axios.post(`${REQUEST_URL}/posts`, post);
    return {
        type: 'CREATE_POST',
        payload: request
    }
}

export const updatePost = (post) => {
    const request = axios.put(`${REQUEST_URL}/posts/${post.id}`, post);
    return {
        type: 'UPDATE_POST',
        payload: request
    }
}

export const deletePost = (post) => {
    const request = axios.delete(`${REQUEST_URL}/posts/${post.id}`);
    return {
        type: 'DELETE_POST',
        payload: request
    }
}

