import React from 'react';
import styled from 'styled-components'
//import { skillDetailsIdVar } from '../../lib/localstore'
import { useQuery } from '@apollo/client'
import { FETCH_CERTIFICATIONS } from './queries'
import EachCert from './eachCertification'
const MyDiv=styled.div`
box-sizing:border-box;

`
export const Certifications=(props)=>{
    const {loading,error,data}=useQuery(FETCH_CERTIFICATIONS);
    let result=null;
    if(loading){
        result="Loading...."
    }
    if(error){
        result="error...."
    }
    if(data){
        result=data.getCertifications.data.map((cert,index)=>{

            return (
                <EachCert key={index} name={cert.name} desc={cert.desc}/>
        )
        })
    }
    return (
        <MyDiv>
       {result}
        </MyDiv>
    );
}

export default Certifications;