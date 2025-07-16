import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>Exclusive</h5>
                        <h6>Subscribe</h6>
                        <p>Get 10% off your first order</p>
                        <Form className="d-flex">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="me-2"
                            />
                            <Button variant="light">→</Button>
                        </Form>
                    </Col>

                    <Col md={3}>
                        <h6>Support</h6>
                        <p className="mb-1">111 Bijoy sarani, Dhaka,</p>
                        <p className="mb-1">DH 1515, Bangladesh.</p>
                        <p className="mb-1">exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </Col>

                    <Col md={2}>
                        <h6>Account</h6>
                        <ul className="list-unstyled">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h6>Quick Link</h6>
                        <ul className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h6>Download App</h6>
                        <p className="small">Save $3 with App New User Only</p>
                        <div className="d-flex mb-2">
                            <div className="bg-light rounded p-2 me-2" style={{ width: 64, height: 64 }}></div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className="bg-light rounded" style={{ width: 100, height: 24 }}></div>
                                <div className="bg-light rounded" style={{ width: 100, height: 24 }}></div>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <div className="bg-light rounded-circle" style={{ width: 24, height: 24 }}></div>
                            <div className="bg-light rounded-circle" style={{ width: 24, height: 24 }}></div>
                            <div className="bg-light rounded-circle" style={{ width: 24, height: 24 }}></div>
                            <div className="bg-light rounded-circle" style={{ width: 24, height: 24 }}></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
