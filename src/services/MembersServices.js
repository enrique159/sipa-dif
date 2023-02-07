import axios from 'axios';

export default {
  getMembers({page = 1, limit = 10, sort = 'createdAt', order = 'desc', search = ''}) {
    return axios.get(`/members/get?page=${page}&limit=${limit}&sort=${sort}&order=${order}&search=${search}`)
      .then(response => response)
      .catch(error => error.response);
  },

  createMember(member) {
    return axios.post('/members/create', member)
      .then(response => response)
      .catch(error => error.response);
  },

  updateMember(member) {
    return axios.put(`/members/update/${member._id}`, member)
      .then(response => response)
      .catch(error => error.response);
  },

  deleteMember(idMember) {
    return axios.delete(`/members/delete/${idMember}`)
      .then(response => response)
      .catch(error => error.response);
  }
}