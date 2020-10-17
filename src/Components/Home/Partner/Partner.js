import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Partner.css';

const Partner = () => {
    return (
        <ul class="nav image d-flex justify-content-center partner">
            <li class="nav-item">
                <img src={slack} alt=""/>
            </li>
            <li class="nav-item">
                <img src={google} alt=""/>
            </li>
            <li class="nav-item">
                <img src={uber} alt=""/>
            </li>
            <li class="nav-item">
                <img src={netflix} alt=""/>
            </li>
            <li class="nav-item">
                <img src={airbnb} alt=""/>
            </li>
        </ul>
    );
};

export default Partner;