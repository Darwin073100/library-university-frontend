import React from "react";
import { Button } from "../components/Button";
import { Student } from "../service/Student";
import "../styles/Table.scss";
const service = new Student();
function StudentTable({ th , students, setModal}) {

  const deleteStudents = async (id)=>{
    await service.delete(id);
  }
  const getModal = async(id)=>{
    const data = await service.getById(id);
    return data;
  }
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            {th.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.lastName}</td>
              <td>{data.numControl}</td>
              <td>{data.address}</td>
              <td>{data.email}</td>
              <td>{data.dateBirth}</td>
              <td>
                <Button style='btn-warning' click={()=>setModal(true)} text='upDate' />
                <Button style='btn-error' click={()=>deleteStudents(data.id)} text='Delete' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export { StudentTable };
