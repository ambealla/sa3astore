import React from 'react';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import { itens } from '../../utils/data';

import Product  from './Product';

const ListProducts = () =>  (
  <div>
<Container>
  <Row style={{}}>
  <div className='firstImprission' style={{margin:"20px", fontSize:"200%",display :"flex", justifyContent:"center", alignContent:"center" , alignItems:"center",color:"#198754"}} > 
    Notre Produits
    </div> 
  </Row>
</Container>
 
  <Container id="promocoes">
    <Row className='flex2'>
      {itens.map(product => (
        <Product key={product.id} product={product} />
      ))}  
    </Row>
  </Container> </div>
) 

export default ListProducts;