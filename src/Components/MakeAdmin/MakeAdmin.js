import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm({});

    const onSubmit = data => {
        fetch('http://localhost:4000/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('success.');
                }
            })
    }
    return (
        <div className="container row">

        <SideBar></SideBar>  

        <div style={{ height: '100vh', width: '80%',background: '#E5E5E5' }}>
        <div className="pt-5 ml-2 mt-3 d-flex justify-content-between">
                    <h1 >Review</h1>
                    <h5 className="mr-5">{ loggedInUser.name}</h5>
                </div>
                <form className="ml-2 mt-2" style={{width: '70%'}} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                    <Form.Label  className="d-flex justify-content-start ml-1 font-weight-bold">Email</Form.Label>
                        <div class="form-row">
                        <div class="col">
                            <input type="text" value={loggedInUser.name} ref={register({ required: true })} name="email" className="form-control" placeholder="Email" />
                            {errors.email && <span>Fill the field</span>}
                        </div>
                    <div class="col">
                    <Button className="d-flex justify-content-start" variant="success" type="submit">
                        Submit
                    </Button>
                    </div>
                        </div>
                    </div>
                   
                    

                </form>
        </div>
    </div>
    );
};

export default MakeAdmin;