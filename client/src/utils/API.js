import axios from "axios";

export const login = (data) => axios.post("/api/user/login", data);
export const register = (data) => axios.post("/api/user/register", data);
export const transactions = (uid) => axios.get("/api/user/transactions/" + uid);

export const logoutAPI = (sessionUUID) => {
  return axios.post("/api/user/logoutAPI", { sessionUUID });
};
