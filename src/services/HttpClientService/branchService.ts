import BaseService from "./base/baseService.ts";

const Endpoint = '/branches/';

class BranchService extends BaseService{
    constructor() {
        super(Endpoint);
    }
}

export default BranchService;