import React from 'react';
/*
import styled from 'styled-components'
import { Form ,
   Input ,Button , 
   Title ,Text ,
    Wrapper , InWrapper,
    Label,
    Row,}  from './themes';
*/
import NavB from './styled-navbar/navb';
//import MainContent from './components/maincontent/maincontent';                     Maincontent is placed in routes file
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/index'
    function App() {
      return (
        <BrowserRouter>
        <NavB/>        
        
          <Routes/>
        
        
        </BrowserRouter>
      )
    }


/*
function App() {
  return (
    <Wrapper>
      <InWrapper>
      <Title>Create new contact</Title>
      </InWrapper>
    <Form>
      <Row>
        <Label>FirstName</Label>
        <Label>LastName</Label>
        hello
        </Row>
        <Row>
        hello
        </Row>
        <Row>
        hello
        </Row>
     </Form>
     
     </Wrapper>
  );
}
*/
export default App;
