import React from "react";
import { Button } from "../components/Button";
import "../styles/Table.scss";

function StudentTable({ th }) {
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
          {/* {td.map((data) => {
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
          })} */}
        </tbody>
      </table>
    </>
  );
}

export { StudentTable };
