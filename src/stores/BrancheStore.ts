import BranchService from "../services/HttpClientService/branchService.ts";
import BaseStore from "./base/BaseStore.ts";

export default class BrancheStore extends BaseStore {
    constructor() {
        super(new BranchService()); // Передаем сервис
    }
}