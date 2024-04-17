import { Container, Row, Col } from "react-bootstrap";

import Logo from "../assets/LOGO 1.jpg";

export default function Footer() {
  return (
    <div className="" style={{ backgroundColor: "#198754", color: "white" }}>
      <Container className="text-center pt-5 mt-5" style={{ fontSize: "10px" }}>
        <Row>
          <Col>
            <div class="col-lg-4">
              <div
                id="footer-about"
                class="me-xl-10 mb-7 mb-lg-0 rounded bg-transparent"
              >
              

                <div class="description rte mb-2 small">
                  <p>
                    La plus grande entreprise leader de montres suisses au Maroc
                  </p>
                  <p>☎️ +212 656-676532</p>
                </div>

                <div id="footer-about-phone mb-1">+212 656-676532</div>

                <div id="footer-about-email mb-0">contact@sa3astore.shop</div>
              </div>
            </div>
          </Col>

          <Col>
            <img
              src={Logo}
              alt="Home Store"
              width={150}
              style={{
                borderTopLeftRadius: "50%",
                BorderTopRightRadius: "50%",
                BorderBottomRightRadius: "50%",
                BorderBottomLeftRadius: "50%",
              }}
            />
          </Col>
        </Row>
        <p className="py-4">
          © 2024 Sa3aStore .
        </p>
      </Container>
    </div>
  );
}
