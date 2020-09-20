import React from 'react';
import styled from 'styled-components'
//import { skillDetailsIdVar } from '../../lib/localstore'
import { useQuery } from '@apollo/client'
import { FETCH_SKILLS } from './queries'
import EachSkill from './eachSkill'
const MyDiv=styled.div`
box-sizing:border-box;

`
export const Skills=(props)=>{
    const {loading,error,data}=useQuery(FETCH_SKILLS);
    let result=null;
    if(loading){
        result="Loading...."
    }
    if(error){
        result=<h1>error....</h1>
    }
    if(data){
        result=data.getSkills.data.map((skill,index)=>{

            return (
                <EachSkill key={index} name={skill.name} desc={skill.desc}/>
        )
        })
    }
    return (
        <MyDiv>
       {result}
        </MyDiv>
    );
}

export default Skills;