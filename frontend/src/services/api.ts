import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// API URL constant
const API_URL: string = "http://localhost:8000";

// Type for public endpoints
type PublicEndpoint = '/users/register/' | '/users/login/';

// List of endpoints that don't need authentication
const publicEndpoints: PublicEndpoint[] = [
  '/users/register/',
  '/users/login/',
  // Add other public endpoints here
];

// Create axios instance with type
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

// Add a request interceptor to include JWT token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Check if the endpoint is public
    const isPublicEndpoint = publicEndpoints.some(endpoint => 
      config.url?.includes(endpoint)
    );

    // Only add token for non-public endpoints
    if (!isPublicEndpoint) {
      const token = localStorage.getItem("access");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // If the request contains files, set Content-Type to multipart/form-data
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error: any) => Promise.reject(error)
);

export default api;