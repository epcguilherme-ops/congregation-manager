import axios from 'axios';

const API_BASE = process.env.EXPO_PUBLIC_API_URL || 'http://10.0.2.2:3000/api';

const instance = axios.create({ baseURL: API_BASE });

export default instance;
