import axios from "axios";

const API = "http://localhost:3000/api/user";

export const registerRequest = (user) => axios.post(`${API}/register`, user);
