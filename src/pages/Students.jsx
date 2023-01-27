import React, { useState } from "react";
import { ReactDOM } from "react-dom/client";
import { Button } from "../components/Button";
import { StudentModal } from "../containers/StudentModal";
import '../styles/Student.scss';

function Students(){
    const [modal, setmodal] = useState(false);
    return(
        <>
        {modal ? 
            <div className="toggle">
                <StudentModal />
            </div>
            :
            null
        }
        <div className="content">
            <h1>Student List</h1>
            <Button
                style='btn-primary'
                text='Add Student'
                click={()=> setmodal(!modal)} 
            />

        </div>
        </>
    )
}

export { Students };