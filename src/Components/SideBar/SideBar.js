import {  faCommentDots, faList, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      
    const [admin, setAdmin] = useState(false);

    // useEffect(() => {
    //     fetch("https://damp-tundra-32037.herokuapp.com/getAdmin")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setAdmin(data);
    //       });
    //   }, []);
    
           

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled mt-3">
        <img src={logo} alt="..." class="img-thumbnail mb-4"></img>
       
             
        <div>
            <li>
                <Link to="/order" className="text-dark">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                </Link>
            </li>
            <li>
                <Link to="/service" className="text-dark" style={{ marginLeft:'30px' }}>
                    <FontAwesomeIcon icon={faList} /> <span>Service List</span> 
                </Link>
            </li>
            <li>
                <Link to="/review" className="text-dark">
                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                </Link>
            </li>
            </div>
           
         
         
            <div>
                <li>
                <Link to="/dashboard" className="text-dark ml-4">
                    <FontAwesomeIcon icon={faList} /> <span>Service List</span> 
                </Link>
            </li>
            <li>
                <Link to="/addService" className="text-dark ml-4">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                </Link>
            </li>
            <li>
                <Link to="/makeAdmin" className="text-dark">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
            </li>
            </div>
        </ul>
            
        
    </div>
    );
};

export default SideBar;