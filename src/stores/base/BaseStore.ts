import { makeObservable, observable, action } from "mobx";

// Универсальный BaseStore
export default class BaseStore {
    isLoading: boolean = false;
    error: string | null = null;
    service: any;
    objects: any[] = []; // Храним все данные в одном атрибуте "objects"

    constructor(service: any) {
        this.service = service;
        makeObservable(this, {
            isLoading: observable,
            error: observable,
            objects: observable,
            getAll: action,
            getById: action,
            create: action,
            update: action,
            delete: action
        });
    }

    // Метод для загрузки всех объектов
    async getAll() {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await this.service.getAll(); // Получаем все данные через сервис
            this.objects = response.data; // Сохраняем данные в атрибут "objects"
            return response; // Возвращаем весь объект response для получения статуса
        } catch (error) {
            this.error = `Ошибка при загрузке данных для ${this.service.endpoint}`;
            console.error(error);
            throw error;
        } finally {
            this.isLoading = false;
        }
    }

    // Метод для получения одного объекта по ID
    async getById(id: string) {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await this.service.getById(id);
            return response; // Возвращаем весь объект response для получения статуса
        } catch (error) {
            this.error = `Ошибка при получении данных для ${this.service.endpoint} с ID ${id}`;
            console.error(error);
            return null;
        } finally {
            this.isLoading = false;
        }
    }

    // Метод для создания нового объекта
    async create(data: object) {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await this.service.create(data);
            const createdItem = response.data;
            this.objects.push(createdItem); // Добавляем в атрибут "objects"
            return response; // Возвращаем весь объект response для получения статуса
        } catch (error) {
            this.error = `Ошибка при создании ${this.service.endpoint}`;
            console.error(error);
            console.error(JSON.stringify(error.response.data));
            throw error;
        } finally {
            this.isLoading = false;
        }
    }

    // Метод для обновления объекта
    async update(id: string, data: object) {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await this.service.update(id, data);
            const updatedItem = response.data;
            const index = this.objects.findIndex((item: any) => item.id === id);
            if (index !== -1) {
                this.objects[index] = updatedItem; // Обновляем в атрибуте "objects"
            }
            return response; // Возвращаем весь объект response для получения статуса
        } catch (error) {
            this.error = `Ошибка при обновлении ${this.service.endpoint} с ID ${id}`;
            console.error(error);
            throw error;
        } finally {
            this.isLoading = false;
        }
    }

    // Метод для удаления объекта
    async delete(id: string) {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await this.service.delete(id);
            this.objects = this.objects.filter((item: any) => item.id !== id); // Удаляем из атрибуты "objects"
            return response; // Возвращаем весь объект response для получения статуса
        } catch (error) {
            this.error = `Ошибка при удалении ${this.service.endpoint} с ID ${id}`;
            console.error(error);
            throw error;
        } finally {
            this.isLoading = false;
        }
    }

    setLoading(state: boolean) {
        this.isLoading = state;
    }
}
