import React from "react";
import "./BottomBar.css";
import { Container, Row, Col, Form, Button, FormCheck } from "react-bootstrap";


const BottomBar = () => {
  return (
    <>
    <div className="wrapper-bottom">
        <Row className="bottom-row-wrapper">
            <Col className="bottom-left-side" sm={6} md={6} lg={6}>
              <p className="bottom-left-side">Company Name - 2022</p>
            </Col>
            <Col className="bottom-right-side" sm={6} md={6} lg={6}>
              <p className="bottom-right-side">UD</p>
            </Col>
        </Row> 
    </div>
    </>
  );
};

export default BottomBar;
