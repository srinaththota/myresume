import React from 'react';
//import PropTypes from 'prop-types';
import {MyNav , MyLink} from './themes';
const Navb = props => {
    return (
        <div>
        <MyNav>
          
        <MyLink to="/welcome">About Me</MyLink>
            <MyLink to="/skills">Skills</MyLink>
            <MyLink to="/certs">Certification</MyLink>
            <MyLink to="/gitlnk">Git Hub</MyLink>  
        </MyNav>
        </div>
    );
};

export default Navb;
