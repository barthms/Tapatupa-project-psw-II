import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users';

export const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createUsers = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateUsers = async (id, data) => {
    const response = await axios.patch(`${API_URL}/${id}`, data);
    return response.data;
};

// SOFT DELETE
export const deleteUsers = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.Users === 200;
};
