import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm({});
    const history = useHistory();
    const onSubmit = data => {
        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('success.');
                    history.push('/service')
                }
            })
    }

    return (
        <div className="container row">

            <SideBar></SideBar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>

                <div className="pt-5 ml-5 mt-3 d-flex justify-content-between">
                    <h1  >Order</h1>
                    <h5 className="mr-5">{ loggedInUser.name}</h5>
                </div>

                <form className="ml-2 mt-2" style={{width: '50%'}} onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" value={loggedInUser.name} ref={register({ required: true })} name="name" className="form-control" placeholder="Your name" />
                        {errors.name && <span>Fill the field</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" value={loggedInUser.email} ref={register({ required: true })} name="email" className="form-control" placeholder="Your email" />
                        {errors.email && <span>Fill the field</span>}

                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" className="form-control" placeholder="Graphic Design" />
                        {errors.service && <span>Fill the field</span>}
                    </div>

                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="6" placeholder="Project Details"></textarea>
                        {errors.details && <span>Fill the field</span>}
                    </div>

                    <div className="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="text" ref={register({ required: true })} name="price" className="form-control" placeholder="Price" />
                                {errors.price && <span>Fill the field</span>}
                            </div>
                            <div class="col">
                            <input type="file" class="form-control-file" id="exampleFormControlFile3"></input>
                            </div>
                        </div>
                    </div>

                    <Button className="d-flex justify-content-start" variant="primary" type="submit">
                         Send
                     </Button>

                </form>
            </div>
        </div>

    );
};

export default Order;