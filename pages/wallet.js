import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import style from "../Styles/Home.module.css"
import Link from 'next/link'
import styled from "styled-components";

const StyledLink = styled.a`
  font-family: 'Libre Baskerville', serif;
`

const Button = styled.button`
  background: transparent;
  // border-radius: 3px;
  border: none;
  // color: palevioletred;
  // margin: 0 1em;
  // padding: 0.25em 1em;

  ${props =>
        props.primary &&
        css`
      background: palevioletred;
      color: white;
    `};
`


export default function Wallet() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
                <Container>
                    <h1 className={`${style.comingsoon} text-center mb-5`}>COMING SOON</h1>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <Row className="justify-content-center align-items-center">
                                <Col md="4" className="text-center">
                                    <a href="https://www.stoicwallet.com/" target="_blank" >
                                        <img src="/images/stoic.png" width="170" height="50" />
                                    </a>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href={{ pathname: '/wallet' }}>
                                        <a href="https://dfinity.org/" target="_blank" >
                                            <img src="/images/icp.png" width="100" height="100" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href={{ pathname: '/wallet' }}>
                                        <a href="https://plugwallet.ooo/" target="_blank" >
                                            <img src="/images/plug.png" width="189" height="60" />
                                        </a>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center" style={{ marginTop: "91px" }}>
                        <Link href={{ pathname: '/' }}>
                            <Button className={style.coba}>HOME</Button>
                        </Link>
                    </Row>
                </Container>
            </div>
    )
}