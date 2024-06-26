import axios from 'axios';

const API_KEY = 'bSqXLQU35vcEItyp3dNMlHv6RBBqmK0j9i6F9sut5ENpSQC04XwJv32T';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
