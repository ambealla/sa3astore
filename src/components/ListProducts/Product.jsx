import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Product = ({product}) => (
  <Col key={product.id} className="m-2 g-4" style={{minWidth: "350px" , maxWidth : "350px"}}>
    
    <Card className="mt-3 d-flex align-center justify-content-center text-center" style={{borderColor :"#198754"}}>
    <div style={{backgroundColor:'#198754' ,fontSize:"22px" ,color:"white",position :"absolute", top:"0%" , left:"0%", height:"50px",width:"40px",display:"flex", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
    {product.id} 
    </div>
      <Card.Img className="m-2" variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="price">
          <p className="price-p">De  {product.priceIni} dh</p>
            <h2><span>{product.priceFin}</span> dh</h2>
        </Card.Text>
        
        {/** Colocar descrição em pop-up 
        <details >
          <summary className="legend">Ver mais</summary>
          <div className="content-popup" id="details">
              <p className="description">
                {product.description}
              </p>
          </div>
        </details>
        */}

      </Card.Body>
    </Card>
  </Col>
)

export default Product;