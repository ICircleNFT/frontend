import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import style from "../Styles/Home.module.css"
import Link from 'next/link'

export default function Wallet() {
    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center" style={{ marginLeft: "0px" }}>
                <Container>
                    <h1 className="d-flex justify-content-center align-items-center">COMING SOON</h1>
                    <Row className="d-flex justify-content-center align-items-center" style={{ marginLeft: "226px", marginTop: "91px" }}>
                        <Col md="4" sm="12">
                            <a href="https://www.stoicwallet.com/" target="_blank" >
                                <img src="/images/stoic.png" width="170" height="50" />
                            </a>
                        </Col>
                        <Col md="4" sm="12">
                            <Link href={{ pathname: '/wallet' }}>
                                <a href="https://dfinity.org/" target="_blank" >
                                    <img src="/images/icp.png" width="100" height="100" />
                                </a>
                            </Link>
                        </Col>
                        <Col md="4" sm="12">
                            <Link href={{ pathname: '/wallet' }}>
                                <a href="https://plugwallet.ooo/" target="_blank" >
                                    <img src="/images/plug.png" width="189" height="60" />
                                </a>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center" style={{ marginLeft: "610px", marginTop: "91px" }}>
                        <Link href={{ pathname: '/' }} >
                            <a>HOME</a>
                        </Link>
                    </Row>


                </Container>
            </div>
        </>
    )
}