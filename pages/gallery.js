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
export default function Gallery() {
    return (
        <Container className={`position-relative pt-5`}>
                <Row className="h-100">
                    <Col>
                        <div className={`${style.card1} mb-5`} style={{backgroundImage: "url(/images/gallery/a1_28.png)"}} />
                        <h2 className={`${style.sneak} mb-3 pt-lg-5`}>SNEAK PEEK</h2>
                        <p className="mb-4">we want our art to be a part of our daily life.
                            It's not just digital art but physical art as well.
                        </p>
                        <div className={`mb-5 mb-sm-5 mx-auto mx-lg-0 ${style.pagination}`}>
                            <Row>
                                <Col>
                                    <Link href={{ pathname: '/' }}>
                                    <Button className={style.coba}>HOME</Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Button className={style.coba}>PAGE</Button>
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
                    <Col lg="5">
                        <div className={`${style.card2} mb-4 mb-lg-0`} style={{backgroundImage: "url(/images/gallery/elika.jpg)"}} />
                    </Col>
                    <Col>
                        <div className={`${style.card3} mb-4 mb-lg-5`} style={{backgroundImage: "url(/images/gallery/ig.png)"}} />
                        <div className={`${style.card4} mt-1`} style={{backgroundImage: "url(/images/gallery/a1_56.png)"}} />
                    </Col>
                    
                </Row>
                <div className={`mx-auto text-center ${style.quotes}`}>
                    "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful." - Aristotle
                </div>

            </Container>
    )

}