import axios from 'axios';

const request = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
});

export { request };
