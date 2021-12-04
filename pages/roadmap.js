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



export default function Arts() {
    return (
        <div className="vh-100 w-100 position-relative" style={{backgroundColor:"#F4F3EF"}}>
            <Container className={`position-relative ${style.mainContainer}`}>
                <Row className="h-100">
                    <Col>
                        <Row>
                            <Col lg="10">
                                <h1 className={style.title}>ROADMAP</h1>
                                <img src="/images/roadmap.png" width="1200" className="d-block mb-5" />
                                <div className={`mb-3 mb-sm-5 mx-auto mx-md-0 ${style.pagination}`}>
                                    <Row>
                                        <Col>
                                            <Button className={style.coba}>PAGE</Button>
                                        </Col>
                                        <Col>
                                            <Link href={{ pathname: '/' }}>
                                            <Button className={style.coba}>HOME</Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link href='/arts'>
                                            <Button className={style.coba} rel="noopener noreferrer">1</Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link href={{ pathname: '/roadmap' }}>
                                            <Button className={style.coba}>2</Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link href={{ pathname: '/gallery' }}>
                                            <Button className={style.coba}>3</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="1">
                        <div className={`mx-auto d-flex align-items-lg-end h-100 position-relative mb-3 mt-3 mt-md-0 ${style.links}`}>
                            <Row className={`flex-lg-column mx-auto bottom-0 ${style.socmedContainer}`}>
                            <Col>
                                <a href={{ pathname: '/wallet' }} className={style.pages}>
                                <img src="/images/wallet.png" width="50" height="50" className={style.socmed} />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://discord.gg/GSkBdeuG2F" target="_blank" >
                                <img src="/images/discord-logo.png" width="50" height="50" className={style.socmed} />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.instagram.com/icircle_nft/" target="_blank" >
                                <img src="/images/instagram-logo.png" width="50" height="50" className={style.socmed} />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://github.com/ICircleNFT" target="_blank" >
                                <img src="/images/GitHub-Mark-32px.png" width="50" height="50" className={style.socmed} />
                                </a>
                            </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className={`mx-auto text-center ${style.quotes}`}>
                    "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful." - Aristotle
                </div>
            </Container>
        </div>
    )
}