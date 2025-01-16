import axios from 'axios';
import {API_URL} from "./settings.ts";

// Создаем инстанс axios с базовой конфигурацией
const client = axios.create({
    baseURL: API_URL,  // Основной URL для запросов
    timeout: 5000,  // Тайм-аут для всех запросов (в миллисекундах)
    headers: {
        'Content-Type': 'application/json',  // Заголовок для JSON
        // Дополнительные заголовки, например, для авторизации
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true,
});

// Можно добавить перехватчики запросов и ответов
client.interceptors.request.use(
    (config) => {
        // Логика перед отправкой запроса (например, добавление токена)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (response) => {
        // Логика обработки ответа (например, проверка статуса)
        return response;
    },
    (error) => {
        // Логика обработки ошибок (например, обработка 401 Unauthorized)
        return Promise.reject(error);
    }
);

export default client;