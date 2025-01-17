import client from "../../axios/client.ts";

class BaseService {

    endpoint = '';

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    // Метод для получения списка сущностей
    async getAll() {
        try {
            const response = await client.get(this.endpoint);
            return response; // Возвращаем сам объект response
        } catch (error) {
            console.error(`Ошибка при получении данных для сущности ${this.endpoint}:`, error);
            throw error; // Перебрасываем ошибку дальше
        }
    }

    // Метод для получения одной сущности по ID
    async getById(id: string) {
        try {
            const response = await client.get(`${this.endpoint}${id}`);
            return response; // Возвращаем сам объект response
        } catch (error) {
            console.error(`Ошибка при получении данных для сущности ${this.endpoint} с ID ${id}:`, error);
            throw error;
        }
    }

    // Метод для создания новой сущности
    async create(data: object) {
        try {
            const response = await client.post(this.endpoint, data);
            return response; // Возвращаем сам объект response
        } catch (error) {
            console.error(`Ошибка при создании сущности ${this.endpoint}:`, error);
            throw error;
        }
    }

    // Метод для обновления данных сущности
    async update(id: string, data: object) {
        try {
            const response = await client.put(`${this.endpoint}/${id}`, data);
            return response; // Возвращаем сам объект response
        } catch (error) {
            console.error(`Ошибка при обновлении сущности ${this.endpoint} с ID ${id}:`, error);
            throw error;
        }
    }

    // Метод для удаления сущности
    async delete(id: string) {
        try {
            const response = await client.delete(`${this.endpoint}/${id}`);
            return response; // Возвращаем сам объект response
        } catch (error) {
            console.error(`Ошибка при удалении сущности ${this.endpoint} с ID ${id}:`, error);
            throw error;
        }
    }
}

export default BaseService;
