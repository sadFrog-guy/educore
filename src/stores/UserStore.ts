import BaseStore from "./base/BaseStore.ts";
import UserService from "../services/HttpClientService/UserService.ts";
import {action, makeObservable, observable} from "mobx";

export default class UserStore extends BaseStore {

    isCreateUserOpen = false;

    constructor() {
        super(new UserService()); // Передаем сервис
        makeObservable(this, {
            isCreateUserOpen: observable,
            openModal: action,// Делаем только свои поля наблюдаемыми
            closeModal: action,// Делаем только свои поля наблюдаемыми
        });
    }

    openModal() {
        this.isCreateUserOpen = true
    }

    closeModal() {
        this.isCreateUserOpen = false
    }
}
