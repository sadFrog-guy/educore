import BaseStore from "./base/BaseStore.ts";
import StudentService from "../services/HttpClientService/studentService.ts";

export default class StudentStore extends BaseStore {
    constructor() {
        super(new StudentService()); // Передаем сервис
    }
}