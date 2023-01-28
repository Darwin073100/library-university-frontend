import React from "react";
import { Button } from "../components/Button";
import "../styles/Table.scss";

function StudentTable({ th , students, setModal}) {
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
                <Button style='btn-error' click={()=>alert(data.name)} text='Delete' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export { StudentTable };
