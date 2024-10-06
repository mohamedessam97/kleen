import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com",
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token or any config modification here
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized access
      console.error("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
