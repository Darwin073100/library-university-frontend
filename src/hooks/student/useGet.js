import { useEffect, useState } from 'react';
import axios from 'axios';


const API = 'http://localhost:3000/api/v1';

function useGet(){
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const getStudents = async ()=>{
            const res = await axios.get(`${API}/students`);
            setStudents(res.data);
        }
        getStudents();
    }, []);
    return students;
}

export { useGet };