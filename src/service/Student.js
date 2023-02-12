import axios from "axios";

const URI= 'http://192.168.8.3:3000/api/v1/students';
class Student{
    async getAll(){
        const res = await axios.get(URI);
        return res.data;
    }

    async getById(id){
        const res = await axios.get(`${URI}/${id}`);
        return res.data;
    }

    async create(data){
        const res = await axios.post(URI, data);
        return res.status;
    }
    async upDate(data, id){
        const res = await axios.patch(`${URI}/${id}`, data);
        return res.status;
    }
    async delete(id){
        await axios.delete(`${URI}/${id}`);
    }
}

export { Student };