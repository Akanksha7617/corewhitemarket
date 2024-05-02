import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import logoo from "../../Images/logoo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              {/* <ion-icon name="bag"></ion-icon> */}
              <img
                src={logoo}
                alt="Multimart Logo"
                style={{ width: "182px", height: "79px" }}
              />
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p> */}
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul class="footer-list">
              <li>
                <a href="/" class="no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/Shop" class="no-underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/Cart" class="no-underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="/TermsAndcond" class="no-underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/Refund" class="no-underline">
                  Refund and Return Policy
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                Plot no13-0, WHP2-BLOCK-A COMMERCIAL Building Name, Saih Shuaib
                3 Area, Dubai, UAE{" "}
              </li>
              <li>Email:support@corewhitemarketing.com</li>
              {/* <li>Phone: +1 1123 456 780</li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
