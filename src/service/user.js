import axios from "axios";

export default {
  getAllUsers: () => axios.get("http://localhost:5000/api/users/"),
  getOneUser: (id) => axios.get(`http://localhost:5000/api/users/${id}`),
  addNewUser: (data) => axios.post("http://localhost:5000/api/users/", data),
  updateUser: (data, id) =>
    axios.put(`http://localhost:5000/api/users/${id}`, data),
  deleteUser: (id) => axios.delete(`http://localhost:5000/api/users/${id}`),
};
