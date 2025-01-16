import BaseService from "./base/baseService.ts";

const Endpoint = '/groups/';

class GroupService extends BaseService{
    constructor() {
        super(Endpoint);
    }
}

export default GroupService;