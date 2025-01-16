import BaseService from "./base/baseService.ts";

const Endpoint = '/users/';

class UserService extends BaseService {
    constructor() {
        super(Endpoint);
    }
}

export default UserService;
