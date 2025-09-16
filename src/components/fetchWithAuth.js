import axios from 'axios';

const FetchWithAuth = async (url, refreshAccessToken) => {
  const axiosApiInstance = axios.create();

  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('authToken')
        ? JSON.parse(localStorage.getItem('authToken'))
        : null;
      config.headers = {
        Authorization: `Bearer ${token?.accessToken}`,
      };
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },

    async function (error) {
      const originalRequest = error.config;

      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        await refreshAccessToken();
        console.log('orginalRequest: ');
        // Retry the original request
        return axiosApiInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return await axiosApiInstance.get(url);
};

export default FetchWithAuth;
