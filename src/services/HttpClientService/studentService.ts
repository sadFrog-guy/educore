import BaseService from "./base/baseService.ts";

const Endpoint = '/students/';

class StudentService extends BaseService{
    constructor() {
        super(Endpoint);
    }


}

export default StudentService;