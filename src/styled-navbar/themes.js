import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Nav ,
    // NavLink
     } from 'styled-nav-component'

export const NavB=styled.div`
background-color:#888;
margin-left:10px;
margin-right:10px;
margin-top:5px;
height:75px;
position:relative;
`

export const Row=styled.div`
display:inline-block;
margin-left:40px;
margin-top:15px;
margin-right:160px;
`

export const MyNav=styled(Nav)`
background-color:hsl(50, 33%, 25%);
text-align:center;
display:flex;
justify-content:flex-end;
align-items:center;
justify-items:center;
flex-direction:row;
flex-wrap:wrap;
height:10vh;
@import url('https://fonts.googleapis.com/css2?family=Pragati+Narrow:wght@700&display=swap');
font-family: 'Pragati Narrow', sans-serif;
`
export const MyLink=styled(Link)`
text-decoration:none;
cursor: pointer;
font-size:1.5rem;
color:white;
margin-right:30px;
&:hover{
color:yellow;
}
`
/*
const MyStyle=styled(NavLink)`
cursor: pointer;
font-size:1.5rem;
color:white;
margin-right:40px;
`
*/
