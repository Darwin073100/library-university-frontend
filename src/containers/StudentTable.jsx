import React from "react";
import { Button } from "../components/Button";
import "../styles/List.scss";

function ListStudents({ th, td }) {
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            {th.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {td.map((data) => {
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.lastName}</td>
              <td>{data.numControl}</td>
              <td>{data.address}</td>
              <td>{data.email}</td>
              <td>{data.dateBirth}</td>
              <td>
                <Button style='btn-primary' click={data.buttonP.click} text={data.buttonP.text} />
                <Button style='btn-error' click={data.buttonE.click} text={data.buttonE.text} />
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}

export { ListStudents };
