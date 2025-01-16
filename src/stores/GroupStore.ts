import BaseStore from "./base/BaseStore.ts";
import groupService from "../services/HttpClientService/groupService.ts";

export default class GroupStore extends BaseStore {
    constructor() {
        super(new groupService()); // Передаем сервис
    }
}
