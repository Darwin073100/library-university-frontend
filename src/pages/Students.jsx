import React, { useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../containers/Modal";
import { StudentModal } from '../containers/StudentModal';
import { StudentTable } from '../containers/StudentTable';
import { useGet } from '../hooks/student/useGet';
import '../styles/Student.scss';

function Students(){
    const th = ['Id','Name', 'Last Name', 'No. Control', 'Address', 'email', 'Birth Date','Actions'];
    const [modal, setModal] = useState(false);
    const students = useGet();
    console.log(students);
    return(
        <>
        <div className="content">
            <h1>Student List</h1>
            <Button
                style='btn-primary'
                text='Add Student'
                click={()=> setModal(!modal)} 
            />
            <StudentTable th={th} students={students} setModal={setModal} />
        </div>
        {modal && 
            <Modal>
                <StudentModal setModal={setModal} />
            </Modal>
        }
        </>
    )
}

export { Students };