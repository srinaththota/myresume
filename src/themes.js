import styled from 'styled-components';
export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

// export const Button = styled.button`
//   width: 300px;
//   height: 35px;
//   background-color: #5995ef;
//   color: #fff;
//   border-radius: 3px;
// `;

export const Button = styled.button`
    display: inline-block;
    opacity: o.7;
    color: blanchedalmond;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    padding: 8px 16px;
    border: none;
    outline: none;
    border: none;
    width: 82px;
    bottom: 5px;
    float: right;
    cursor: pointer;

`
// Text

export const Title = styled.h1`
  margin: -20px;
  top: 0;
  padding: 0;
  left:1px;
  font-size: 20px;
  color:blue;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Row=styled.div`
  margin-left: 15px;
  margin-top: 25px;
`;
export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

export const Wrapper = styled.div`
background-color:red;
left:900px;
top:400px;
height:500px;
z-index:101;
box-shadow:0 0 10px rgba(0,0,0,0.25);
width:45%;
`
export const InWrapper=styled.div`
  max-width:800px;
  margin: 50px auto;
  position: relative;
  box-shadow: 0 10px 30px 0px rgba(0,0,0,0.1);
  padding: 30px;
  background-color:rgb(149, 153, 156);
`

export const Label=styled.label`
    position: relative;
    left: 20px;
    bottom: 10px;
    font-size: 13px;
    line-height: 20px;
    font-weight: 100px;
    color: gray;
    cursor: text;
    transition: transform 0.2s ease-in-out;
`