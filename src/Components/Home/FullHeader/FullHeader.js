import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';

const FullHeader = () => {
    return (
        <div style={{backgroundColor:'#FBD062',clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 85%)'}}>
            <Header></Header>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default FullHeader;