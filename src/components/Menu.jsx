import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import Logo from "../assets/LOGO 1.jpg";
import ModalContact from './ModalContact';

export default function Menu() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleWhatsAppClick = () => {
    // Replace `YOUR_PHONE_NUMBER` with your WhatsApp phone number
    window.open(`https://wa.me/212656676532`, '_blank');
  };
  return (
    <Navbar className='' style={{backgroundColor:"#198754", color:"#ffffff !important"}} expand="md" widht="100%">
      <Container>
        <Navbar.Brand href="#home">
          <img id="logo" src={Logo} alt="Logotipo"  widht={80} height={80}  style={ {   
          borderTopLeftRadius : "50% 50%",
                            borderTopRightRadius: "50% 50%",
                            borderBottomRightRadius:"50% 50%",
                            borderBottomLeftRadius: "50% 50%",}}     
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center justify-content-end'>
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Product">Product</Nav.Link>
            <Nav.Link href="#Info">Info</Nav.Link>
            <Button  style={{margin :"15px", backgroundColor:"white", color:"#198754"}} onClick={handleWhatsAppClick}>Contact via WhatsApp</Button>
      
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}