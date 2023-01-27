import React from 'react'
import '../styles/StudentModal.scss';

function StudentModal() {
  return (
    <>
    <div className="modal">
            <form action="" className="form">
                <div className="inputs">
                    <label htmlFor="txtId">Id</label>
                    <input type="number" name="" id="txtId" />
                </div>
                <div className="inputs">
                    <label htmlFor="txtName">Name</label>
                    <input type="text" name="" id="txtName" />
                </div>
                <div className="inputs">
                    <label htmlFor="txtNumControl">Number of Control</label>
                    <input type="number" name="" id="txtNumControl" />
                </div>
                <div className="inputs">
                    <label htmlFor="txtAddress">Address</label>
                    <input type="text" name="" id="txtAddress" />
                </div>
                <div className="inputs">
                    <label htmlFor="txtEmail">Email</label>
                    <input type="email" name="" id="txtEmail" />
                </div>
                <div className="inputs">
                    <label htmlFor="txtDate">Date Birth</label>
                    <input type="datetime-local" name="" id="txtDate" />
                </div>
                <div className="inputs">
                    <button className="btn btn-primary">Create</button>
                    <button className="btn btn-warning">Limpiar</button>
                    <button className="btn btn-error">Salir</button>
                </div>
            </form>
        </div>
    </>
  )
}

export { StudentModal };