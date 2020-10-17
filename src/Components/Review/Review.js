import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm({});

    const onSubmit = data => {
        fetch('https://damp-tundra-32037.herokuapp.com/addReview', {
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
                <form className="ml-2 mt-2" style={{width: '50%'}} onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" value={loggedInUser.name} ref={register({ required: true })} name="name" className="form-control" placeholder="Your name" />
                        {errors.name && <span>Fill the field</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="companyName" className="form-control" placeholder="Your company name" />
                        {errors.companyName && <span>Fill the field</span>}
                    </div>

                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="6" placeholder="Description"></textarea>
                        {errors.details && <span>Fill the field</span>}
                    </div>


                    <Button className="d-flex justify-content-start" variant="dark" type="submit">
                        Submit
                    </Button>

                </form>
        </div>
    </div>
    );
};

export default Review;