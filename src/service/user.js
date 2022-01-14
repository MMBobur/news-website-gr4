import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllUsers: () => axios.post('http://localhost:8000/api/user/'),
  postUser: (data) => axios.post('http://localhost:8000/api/user/', data),
};
