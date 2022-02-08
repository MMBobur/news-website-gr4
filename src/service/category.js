import axios from "axios";

export default {
  getAllCategory: () => axios.get("http://localhost:5000/api/category/"),
  getOneCategory: (id) => axios.get(`http://localhost:5000/api/category/${id}`),
  addNewCategory: (data) =>
    axios.post("http://localhost:5000/api/category/", data),
  updateCategory: (data, id) =>
    axios.put(`http://localhost:5000/api/category/${id}`, data),
  deleteCategory: (id) =>
    axios.delete(`http://localhost:5000/api/category/${id}`),
};
