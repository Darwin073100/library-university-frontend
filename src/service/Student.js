import axios from "axios";

const API= 'http://localhost:3000/api/v1/students';
class Student{
    async getAll(){
        const res = await axios.get(API);
        return res.data;
    }

    async getById(id){
        const res = await axios.get(`${API}/${id}`);
        return res.data;
    }

    async create(data){
        const res = await axios.post(API, data);
        return res.status;
    }
}

export { Student };