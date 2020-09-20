import React from 'react';
import { Desc } from '../skills/mystyles';
const EachCert=props=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <Desc>{props.desc}</Desc>
        </div>
    )
}

export default EachCert;