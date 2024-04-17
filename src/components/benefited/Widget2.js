import React from 'react'

import BlackFriday from "../../assets/productHamza/ADShamza/yed.jpg";
import { Col, Container, Row } from 'react-bootstrap';
export default function Widget2() {
  return (
   <Container>
    
     <Row className="bloco-post Container" style={{ marginTop: "80px", }}>
        <Col className="post1 m-2 g-4" style={{height:"100%",minWidth: "350px" , maxWidth : "35%"}}>
          <img src={BlackFriday}  style={{borderRadius: "10%", borderColor:"#198754", border:"2px solid #198754" }}  width={100}  alt="banner Black Friday" />
        </Col>

        <Col className="post2 m-2 g-4 " style={{minWidth: "350px" , maxWidth : "350px"}}>
        <div class="subtitle mb-3 fs-6" style={{letterSpacing :".1rem"}}>
                                        MONTRES DE LUXE
                                    </div>
          <p className='firstImprission' style={{color:"#198754"}}>
          JUSQU’À 60% DE RÉDUCTION PAR RAPPORT AU PRIX DE MARCHE{" "}
          </p> 
          <p style={{fontFamily:"Fjalla One sans-serif"}}>Meilleure qualité.</p>
        </Col>
      </Row>
   </Container>
      
   
  )
}
