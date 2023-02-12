import React, { useRef, useState } from "react";
import "../styles/StudentModal.scss";
import { Student } from "../service/Student";
import { useGet } from "../hooks/student/useGet";

const service = new Student();

function StudentModal({ setModal }) {
  const form = useRef(null);
  const [getAll] = useGet();
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [numControl, setNumControl] = useState(0);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [dateBirth, setDateBirth] = useState('');

  const handleId = (e)=>{
    setId(e.target.value);
  }
  const handleName = (e)=>{
    setName(e.target.value);
  }
  const handleLastName = (e)=>{
    setLastName(e.target.value);
  }
  const handleNumControl = (e)=>{
    setNumControl(e.target.value);
  }
  const handleAddress = (e)=>{
    setAddress(e.target.value);
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handleDateBirth = (e)=>{
    setDateBirth(e.target.value);
  }

  const handleInput = (e) => {
    e.preventDefault();
    const create = {
      name,
      lastName,
      numControl,
      address,
      email,
      dateBirth,
    }
    createStudent(create);
    getAll();
    formClear();
  };

  const formClear = () => {
    setId(0);
    setName('');
    setLastName('');
    setNumControl(0);
    setAddress('');
    setEmail('');
    setDateBirth('');
  };
  const createStudent = async (data) => {
    await service.create(data);
  };

  const deleteStudents = async (id)=>{
    await service.delete(id);
  }

  return (
    <>
      <form className="form" ref={form}>
        <h1>Form Student</h1>
        <div className="inputs">
          <label htmlFor="txtId">Id</label>
          <input type="number" name="Id" value={id} onChange={handleId} id='txtId'/>
        </div>
        <div className="inputs">
          <label htmlFor="txtName">Name</label>
          <input type="text" name="Name" value={name} onChange={handleName}/>
        </div>
        <div className="inputs">
          <label htmlFor="txtLastName">Last Name</label>
          <input type="text" name="LastName" value={lastName} onChange={handleLastName}/>
        </div>
        <div className="inputs">
          <label htmlFor="txtNumControl">Number of Control</label>
          <input type="number" name="NumControl" value={numControl} onChange={handleNumControl}/>
        </div>
        <div className="inputs">
          <label htmlFor="txtAddress">Address</label>
          <input type="text" name="Address" value={address} onChange={handleAddress}/>
        </div>
        <div className="inputs">
          <label htmlFor="txtEmail">Email</label>
          <input type="email" name="Email" value={email} onChange={handleEmail}/>
        </div>
        <div className="inputs">
          <label htmlFor="DateBirt">Date Birth</label>
          <input type="datetime-local" name="DateBirth" value={dateBirth} onChange={handleDateBirth} />
        </div>
        <div className="inputs">
          <button className="btn btn-primary" onClick={handleInput}>
            Create
          </button>
          <button className="btn btn-warning" onClick={formClear}>
            Limpiar
          </button>
          <button className="btn btn-error" onClick={() => setModal(false)}>
            Salir
          </button>
        </div>
      </form>
    </>
  );
}

export { StudentModal };
