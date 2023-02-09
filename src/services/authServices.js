
import axios from 'axios';

export default {
  loginUser(credentials) {
    return axios.post('/users/signin', credentials)
    .then(response => response)
    .catch(error => error.response);
  }, 
};