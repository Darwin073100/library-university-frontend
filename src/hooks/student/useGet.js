import { useEffect, useState } from 'react';
import { Student } from '../../service/Student';

// Creación del objeto del servicio
const service = new Student();

function useGet(){
    const [students, setStudents] = useState([]);

    // Consumiendo el servicio
    const getAll = async()=>{
        setStudents(await service.getAll());
    }

    useEffect(()=>{
        getAll();
    }, []);
    return [students, getAll];
}

export { useGet };