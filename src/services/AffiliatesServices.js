import axios from 'axios';

export default {
  getAffiliates({page = 1, limit = 10, sort = 'createdAt', order = 'desc', search = ''}) {
    return axios.get(`/affiliates/getAffiliates?page=${page}&limit=${limit}&sort=${sort}&order=${order}&search=${search}`)
      .then(response => response)
      .catch(error => error.response);
  },

  createAffiliate(affiliate) {
    return axios.post('/affiliates/create', affiliate)
      .then(response => response)
      .catch(error => error.response);
  },

  updateAffiliate(affiliate) {
    return axios.put(`/affiliates/update/${affiliate._id}`, affiliate)
      .then(response => response)
      .catch(error => error.response);
  },

  deleteAffiliate(idAffiliate) {
    return axios.delete(`/affiliates/delete/${idAffiliate}`)
      .then(response => response)
      .catch(error => error.response);
  }
}