import axios from "axios";
const baseUrl = "/api/persons";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

const update = async (id, updatedPerson) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
  return response.data;
};

export default {
  getAll,
  create,
  remove,
  update,
};
