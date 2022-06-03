const API_PROTOCOL = 'http';
const API_HOST = 'localhost';
const API_PORT = '5000';
const API_URL = `${API_PROTOCOL}://${API_HOST}${API_PORT ? `:${API_PORT}` : ''}`;

export { API_PROTOCOL, API_HOST, API_PORT, API_URL };