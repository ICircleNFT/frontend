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
  // margin: 0 1em;gw 
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
    <Container className={`position-relative ${style.mainContainer}`}>
            <Row className="h-100">
                <Col>
                    <Row className="flex-lg-row flex-column-reverse">
                        <Col lg="7">
                            <h1 className={style.title}>OUR ARTS</h1>
                            <p className={style.subtitle}>
                            ICircle art is created by combining mathematics, creative coding, and aesthetic soul, which results in beautiful art. 
                            All the arts are formed from mathematical functions and applied geometry. “Circle” (as part of the name) 
                            is used not only because it is related to mathematics and geometry, but also because circles play an important role in this artwork. 
                            In fact, the circle is the DNA of ICircle artwork. If you zoom in very closely into our art, you'll see that each art is made of thousands 
                            and even millions of circles.
                            </p>
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
                        <Col md="5" className="d-flex align-items-center justify-content-center mb-md-0 mb-5">
                            <img src="/images/sarasvati.png" width="300" />
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
    )
}