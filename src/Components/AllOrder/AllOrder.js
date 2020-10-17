import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';


const AllOrder = () => {
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(service);
    useEffect(() => {
        fetch('https://damp-tundra-32037.herokuapp.com/allOrderList')
            .then(res => res.json())
            .then(data => setService(data));
    },[loggedInUser.email])

    const deleteEvent = (id) => {
        fetch('https://damp-tundra-32037.herokuapp.com/deleteUser/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert("deleted successfully")
            })
    }
    return (
        <div className="row">
            <SideBar></SideBar>
            <div style={{ height: '100vh', width: '80%',background: '#E5E5E5' }}>
            <div  className='container'>
                <img id='logo' src="" alt=""/>
                <br/>
                <h3 id='text'>Service List</h3>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email id</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {service.map(service =>
                <tbody>
                    <tr>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.service}</td>
                        <td>{service.details}</td>
                        <td>
                       <Button onClick={() => deleteEvent(service._id)} className='btn btn-primary'>Done</Button>
                        </td>
                    </tr>
                </tbody>
                )}
        </Table>
        </div>
        </div>
    );
};

export default AllOrder;