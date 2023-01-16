import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// files
import { EmployeeContext } from '../context/EmployeeContext';


const AddForm = ()=> {
  const { dispatch } = useContext(EmployeeContext);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch({
      type: 'add_employee',
      employee: { name, email, address, phone }
    })
  };  
  
  
  return(
   <Form onSubmit={handleSubmit}>  
     <Form.Group className='my-2'>
       <Form.Label>Employee Name</Form.Label>
       <Form.Control
        type='text'
        placeholder='Enter employee name' 
        value={name}
        onChange={(e)=> setName(e.target.value) }
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
     </Form.Group>

     <Form.Group className='my-2'>
       <Form.Label>Employee address</Form.Label>
       <Form.Control
        as='textarea'
        rows={3}
        placeholder='Enter employee address'
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
       />
     </Form.Group>

     <Form.Group className='mt-2'>
       <Button type='submit' variant='success' className='w-100'>
          Add New Employee
       </Button>
     </Form.Group>
    
   </Form>
  )
}

export default AddForm;






