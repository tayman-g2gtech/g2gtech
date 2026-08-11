import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // proxy ou baseURL à adapter selon l'environnement
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
