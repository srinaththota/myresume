import React from 'react';
import { BackGround } from './styles'
const maincontent = (props) => {
    return (
        <BackGround>
            {props.children}
        </BackGround>
    );
};

export default maincontent;