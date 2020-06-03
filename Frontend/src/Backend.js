import axios from "axios"

const base = '/api/persons';

const fetchAllNumbers = () => {
    const req = axios.get(base);
    return req.then(response => response.data);
}

const deleteNumber = (id) => {
    return axios.delete(`${base}/${id}`);
}

const updateNumber = (id, object) => {
    return axios.put(`${base}/${id}`, object);
}

const createNumber = (object) => {
    return axios.post(base, object);
}

export default {fetchAllNumbers, deleteNumber, updateNumber, createNumber}