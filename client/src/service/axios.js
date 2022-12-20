import axios from 'axios';

const baseUrl = 'http://localhost:5050/api/v1';
const taskUrl = 'tasks'

export const getTasks = () => {
  return axios.get(`${baseUrl}/${taskUrl}`);
}

export const updateTask = (id, body) => {
  return axios.patch(`${baseUrl}/${taskUrl}/${id}`, body);
}

export const addTask = (body) => {
  return axios.post(`${baseUrl}/${taskUrl}`, body);
}

export const deleteTask = (id) => {
  return axios.delete(`${baseUrl}/${taskUrl}/${id}`);
}
