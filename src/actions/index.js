import axios from 'axios'

const REQUEST_URL = 'https://jsonplaceholder.typicode.com';

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