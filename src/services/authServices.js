
import axios from 'axios';

export default {
  loginUser(credentials) {
    return axios.post('/auth', credentials)
    .then(response => response)
    .catch(error => error.response);
  }, 
};