import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';


const ServiceList = () => {
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(service);
    useEffect(() => {
        fetch('http://localhost:4000/allOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setService(data));
    },[loggedInUser.email])


    return (
        <div className="row">

            <SideBar></SideBar>
        
        
            <div style={{ height: '100vh', width: '80%',background: '#E5E5E5' }}>
                <h2 className="pt-5 ml-5 mt-2 mb-5" >Sevice List order show</h2>
           
                {service.map(service =>
                <div class="card w-25 ml-2 mt-2">
                <div class="card-body">
                   <div class="row">
                   <div class="col">
                        <h5 class="card-title"></h5>
                    </div>
                    <div class="col">
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                   </div>
                        <h5 class="d-flex justify-content-start">{service.service}</h5>
                        <p class="card-text d-flex justify-content-start">{service.details}</p>
                    
                    </div>
                </div>
                )}
            </div>

           
                
        </div >
    );
};

export default ServiceList;