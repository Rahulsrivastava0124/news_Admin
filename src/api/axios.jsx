import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.yashsinha.online",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔒 Automatically attach token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
