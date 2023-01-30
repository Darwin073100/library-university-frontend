import React, { useRef, useState } from "react";
import "../styles/StudentModal.scss";
import { Student } from '../service/Student';

const service = new Student(); 

function StudentModal({ setModal }) {
  const form = useRef(null);
  const [student, setStudent] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('Name'),
      lastName: formData.get('LastName'),
      numControl: formData.get('NumControl'),
      address: formData.get('Address'),
      email: formData.get('Email'),
      dateBirth: formData.get('DateBirth'),
    }
    createStudent(data);
  };

  const createStudent = async(data)=>{
    await service.create(data);
  }

  return (
    <>
      <form className="form" ref={form}>
        <h1>Form Student</h1>
        <div className="inputs">
          <label htmlFor="txtId">Id</label>
          <input type="number" name="Id" />
        </div>
        <div className="inputs">
          <label htmlFor="txtName">Name</label>
          <input type="text" name="Name" />
        </div>
        <div className="inputs">
          <label htmlFor="txtLastName">Last Name</label>
          <input type="text" name="LastName" />
        </div>
        <div className="inputs">
          <label htmlFor="txtNumControl">Number of Control</label>
          <input  
            type="number"
            name="NumControl"
          />
        </div>
        <div className="inputs">
          <label htmlFor="txtAddress">Address</label>
          <input type="text" name="Address" />
        </div>
        <div className="inputs">
          <label htmlFor="txtEmail">Email</label>
          <input type="email" name="Email" />
        </div>
        <div className="inputs">
          <label htmlFor="DateBirt">Date Birth</label>
          <input
            type="datetime-local"
            name="DateBirth"
          />
        </div>
        <div className="inputs">
          <button className="btn btn-primary" onClick={handleInput}>Create</button>
          <button className="btn btn-warning">Limpiar</button>
          <button className="btn btn-error" onClick={() => setModal(false)}>
            Salir
          </button>
        </div>
      </form>
    </>
  );
}

export { StudentModal };
