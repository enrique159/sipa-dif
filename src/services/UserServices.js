import axios from 'axios';

export default {
  getUser(id) {
    return axios.get(`/users/${id}`)
    .then(response => response)
    .catch(error => error.response);
  }, 

  getUserSimple(id) {
    return axios.get(`/users/simple/${id}`)
    .then(response => response)
    .catch(error => error.response);
  }, 

  getUsers() {
    return axios.get(`/users`)
    .then(response => response)
    .catch(error => error.response);
  },

  createUser(user) {
    return axios.post('/users/register', user)
      .then(response => response)
      .catch(error => error.response);
  },
};