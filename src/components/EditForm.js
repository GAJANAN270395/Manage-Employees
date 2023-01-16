import React,{ useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// files
import { EmployeeContext } from '../context/EmployeeContext';

const EditForm = (props) => {
  const { dispatch, sortedEmployees } = useContext(EmployeeContext);

  const employee = sortedEmployees.filter(
    (employee) => employee.id === props.employeeID
  );

  const [name, setName] = useState(employee[0].name);
  const [email, setEmail] = useState(employee[0].email);
  const [address, setAddress] = useState(employee[0].address);
  const [phone, setPhone] = useState(employee[0].phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = props.employeeID;
    const updatedEmployee = {
      id, name, email, address, phone
    };
    dispatch({
      type: "update_employee",
      id,
      updatedEmployee
    });
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className='my-2'>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter employee name' 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          required        
        />
      </Form.Group>

      <Form.Group className='my-2'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter employee email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required        
        />

        <Form.Group className='my-2'>
          <Form.Label>Employee address</Form.Label>
          <Form.Control 
            as='textarea'
            placeholder='Enter employee address'
            rows={3}
            value={address}
            onChange={(e)=> setAddress(e.target.value)}          
          />
        </Form.Group>

        <Form.Group className='my-2'>
          <Form.Label>Employee Phone</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter employee phone number'
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            required          
          />

          <Form.Group className='mt-2'>
            <Button variant='warning' type='submit' className='w-100'>
              Update Employee
            </Button>
          </Form.Group>
        </Form.Group>
      </Form.Group>

    </Form>
  )
}

export default EditForm;

