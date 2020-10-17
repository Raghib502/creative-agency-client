import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    return (
        <div className="row">

        <SideBar></SideBar>
        
            
        

        <div style={{ height: '100vh', width: '80%',background: '#E5E5E5' }}>
        <h2 className="pt-5 ml-5 mt-2 mb-5 " >Add Service</h2>
            <Form className='form'>
                   
                    <div className='form-group'>
                    <div className='row'>
                        <div className='col'>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Service Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" /> 
                            </Form.Group>
                        </div>
                        <div className='col'>
                            <Form.Group controlId="">
                            <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Icon</Form.Label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile3"></input>
                            </Form.Group>
                        </div>

                    </div>
                    </div>

                    <Form.Group controlId="">
                    <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Description</Form.Label>
                    <Form.Control as="textarea" rows="5" style={{width: '50%'}} placeholder="Enter description" />
                    </Form.Group>

                    
                    <Button
                     className="d-flex justify-content-start" variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
        </div>
    </div>
    );
};

export default AddService;