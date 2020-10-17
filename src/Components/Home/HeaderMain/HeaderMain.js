import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 text-left offset-md-1">
                <h1>Let’s Grow Your<br/> Brand To The<br/>Next Level </h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn btn-dark">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={frame}alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMain;