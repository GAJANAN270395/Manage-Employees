import React, {useState} from 'react';
import {Button, Modal, Alert} from 'react-bootstrap'

// files
import AddForm from './AddForm';

const EmployeeList = ()=> {

  const [showAlert, setShowAlert] = useState(false);


  return(
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
              <Button
                className="btn btn-success text-white"
              >               
                <i className="material-icons">&#xE147;</i>{" "}
                <span>Add New Employee</span>
              </Button>
          </div>
        </div>
      </div>

      {/* <Alert variant='success' show={showAlert}> 
        EmployeList successfully updated! 
      </Alert> */}

      <table className='table table-striped table-hover w-100'>
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

        </tbody>
      </table>

       {/* Pagination */}
       {/* <Pagination /> */}


       {/* Modal */}
       {/* <Modal>
         <Modal.Header>

         </Modal.Header>

         <Modal.Body>

         </Modal.Body>

         <Modal.Footer>

         </Modal.Footer>
       </Modal> */}
       

        <AddForm />
     
    </>
  )
}

export default EmployeeList;