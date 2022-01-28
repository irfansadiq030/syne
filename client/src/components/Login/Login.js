import React from "react";
import "./Login.css";
import synelogo from "../../images/syne-logo.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <div className="Login-container">
        <Container>
          <Row className="Login-wrapper">
            <Col className="left-side" sm={8} md={4} lg={8}>
              <div className="image-map-Wrapper"></div>
            </Col>
            <Col className="right-side" sm={4} md={8} lg={4}>
              <div className="Logo-Wrapper">
                <img
                  alt="notfound"
                  src={synelogo}
                  className="syne-Logo-image"
                />
              </div>
              <Form className="login-form">
                <Form.Group
                  className="mb-3 login-form-group-input"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="login-form-label">
                    Email/Username
                  </Form.Label>
                  <Form.Control
                    className="login-form-input"
                    type="email"
                    placeholder="Email/Username"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="login-form-label">Password</Form.Label>
                  <Form.Control
                    className="login-form-input"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Link className="forget-link" to="/forgetpassword">
                    Forget your password?
                  </Link>
                </Form.Group>
                <div className="login-submit-btn-div">
                  <Button className="login-submit-btn" type="submit">
                    Login
                  </Button>
                </div>
                <div className="login-powerd-by">Powerd by UD</div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
