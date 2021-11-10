import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import style from "../Styles/Home.module.css"
import Link from 'next/link'

export default function Wallet() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="vh-100 d-flex align-items-center justify-content-center" >
                        <h1 className={style.wallet}>COMING SOON </h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}