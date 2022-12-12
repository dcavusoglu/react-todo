import axios from 'axios';

const baseUrl = 'http://localhost:5050/api/v1';

const taskUrl = 'tasks'

export const getTasks = async () => {
  return axios.get(`${baseUrl}/${taskUrl}`);
}

export const updateTask = async (id, body) => {
  return axios.patch(`${baseUrl}/${taskUrl}/${id}`, body);
}

export const addTask = async (body) => {
  return axios.post(`${baseUrl}/${taskUrl}`, body);
}
