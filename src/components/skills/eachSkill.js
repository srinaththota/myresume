import React from 'react';
import { Desc } from './mystyles';
const EachSkill=props=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <Desc>{props.desc}</Desc>
        </div>
    )
}

export default EachSkill;