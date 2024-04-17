import { Container, Row } from "react-bootstrap";
import { benefites } from "../../utils/data"
export default function Widget () {
   return(

   
   <Container>
            <Row  className="d-flex justify-content-around text-center my-5 icon-blocks enter-view position-relative overflow-hidden bg-white text-body pt-0 pb-8 mt-0 mb-0 entered">
 
          <div className="row mx-n3 mx-lg-n4 row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
         
        { benefites.map((benefite) => (
      

      <div key={benefite.id} className="col p-3 p-lg-4">
        <div 
          className="h-100 ctbox "
        >
          <div className="card h-100 bg-white text-body shadow-none  text-start">
            <div className="" style={{height: "100%"}}>
              <div className="d-flex align-items-center"  style={{height: "100%"}}>
                <div className="block-icon flex-shrink-0 me-5">
                  <img
                    src={benefite.image}
                    height={70}
                    width={70}
                    alt="error"
    
                  />
                </div>

                <div className="block-inner" style={{width: "50%"}}>
                  <h3 className="title mb-2 h5" style={{fontSize: "70%"}}>{benefite.title}</h3>

                  <div className="description rte mt-n3 mb-0 fs-6">
                    <p style={{fontSize: "70%"}}>{benefite.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    ))}
     </div>
 </Row>
        </Container>
)
};

