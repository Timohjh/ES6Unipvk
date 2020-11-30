import axios from 'axios';

const url = `https://es6-projekti.herokuapp.com/items`;

export const fetchItems = () => axios.get(url);
export const createItem = (newItem) => axios.post(url, newItem);
export const updateItem = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem);
export const deleteItem = (id) => axios.delete(`${url}/${id}`);