import axios, { AxiosError } from 'axios';

interface AuthResponse {
    token: string;
    refreshToken: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

interface ErrorResponse {
    message: string;
    status: number;
}

const api = axios.create({
    baseURL: `/api`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Create a separate instance for refresh token requests
const refreshApi = axios.create({
    baseURL: `/api`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to all requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config;

        // If the error is not 401 or the request has already been retried, reject
        if (error.response?.status !== 401 || !originalRequest || originalRequest._retry) {
            return Promise.reject(error);
        }

        // Mark the request as retried to prevent infinite loops
        originalRequest._retry = true;

        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            // Use the separate refreshApi instance to avoid interceptor loops
            const response = await refreshApi.post<{ token: string }>('/auth/refresh', { refreshToken });
            const { token } = response.data;

            // Store the new token
            localStorage.setItem('authToken', token);

            // Update the original request with the new token
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
        } catch (refreshError) {
            // If refresh fails, clear tokens
            localStorage.removeItem('authToken');
            localStorage.removeItem('refreshToken');
            return Promise.reject(refreshError);
        }
    }
);

export const login = async (email: string, password: string): Promise<{
    success: boolean;
    token?: string;
    refreshToken?: string;
    user?: AuthResponse['user'];
    error?: ErrorResponse;
}> => {
    try {
        const response = await api.post<AuthResponse>('/users/login', { email, password });
        const { token, refreshToken, user } = response.data;

        // Store tokens
        localStorage.setItem('authToken', token);
        localStorage.setItem('refreshToken', refreshToken);

        return {
            success: true,
            token,
            refreshToken,
            user,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                error: {
                    message: error.response?.data?.message || 'An error occurred during login',
                    status: error.response?.status || 500,
                }
            };
        }
        return {
            success: false,
            error: {
                message: 'An unexpected error occurred',
                status: 500
            }
        };
    }
};

export const signUp = async (name: string, email: string, password: string): Promise<AuthResponse> => {
    try {
        const response = await api.post<AuthResponse>('/users/register', {
            name,
            email,
            password
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Signup error:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
            throw new Error(error.response?.data?.message || 'Failed to sign up');
        }
        throw new Error('An unexpected error occurred during signup');
    }
};

interface Pet {
    id: string;
    name: string;
    // Add other pet properties as needed
}

export const getMyPets = async (userId: string): Promise<Pet[]> => {
    try {
        const response = await api.get<Pet[]>('users/pets', {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching pets:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
            throw new Error(error.response?.data?.message || 'Failed to fetch pets');
        }
        throw new Error('An unexpected error occurred while fetching pets');
    }
};

// Add type declaration for the _retry property
declare module 'axios' {
    export interface AxiosRequestConfig {
        _retry?: boolean;
    }
}

export default api;

