import React from 'react';
import Employee from './Employee';
import { Button, Modal, Alert } from 'react-bootstrap';

import AddForm from './AddForm';
import Pagination from './Pagination';

const EmployeeList = () => {
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b> Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button className="btn btn-success text-white">
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};
export default EmployeeList;
