import React from 'react';
import  { AboutMe , Heading , Note , MyButton} from './mystyles'

function welcome(props) {
    return (
        <div>
       <Heading> Welcome</Heading>
       <AboutMe> I have ~9 years experience on different technologies.</AboutMe>
       <AboutMe> Worked in Scania Group (Sweden),Ness Technologies (Mumbai India) Capgemini (Mumbai)</AboutMe>
       <AboutMe>I used different technologies in various projects. In my recent application i used react.js , graphql, apollo client in front end and node.js , graphql , sequelize and mongoose(ORM and ODM). For infrastructure aws cloud , docker , kubernetes has been used</AboutMe>            
       <Note>I developed this app using (React.js,styled-components,graphql,apollo/client3,node.js mongodb and deployed in aws)</Note>
        <MyButton>Click</MyButton>
        </div>
    );
}

export default welcome;