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
        <>
            <Container>
                <Row>
                    <Col md="4" sm="12">
                        <div className="d-flex justify-content-top align-items-top" style={{ marginLeft: "-70px", marginTop: "100px" }}>
                            <img src="/images/exhibition/image1.png" width="400" height="400" />
                            <div style={{ marginTop: "500px", marginLeft: "-400px" }}>
                                <h2 className={style.sneak}>SNEAK PEEK OF OUR ART </h2>
                                <p style={{ marginRight: "50px" }}>we want our art to be a part of our daily life.
                                    It's not just digital art but physical art as well.
                                </p>
                                <Container style={{ marginTop: "50px", marginLeft: "45px" }}>
                                    <Row>
                                        <Col md="1" style={{ marginLeft: "-75px" }}>
                                            <Button className={style.coba}>PAGE</Button>
                                        </Col>
                                        <Col md="1" style={{ marginLeft: "20px" }}>
                                            <Link href={{ pathname: '/' }}>
                                                <Button className={style.coba}>HOME</Button>
                                            </Link>
                                        </Col >
                                        <Col md="1" style={{ marginLeft: "30px" }}>
                                            <Link href='/arts'>
                                                <Button className={style.coba} rel="noopener noreferrer">1</Button>
                                            </Link>
                                        </Col>
                                        <Col md="1" style={{ marginRight: "-20px" }}>
                                            <Link href={{ pathname: '/roadmap' }}>
                                                <Button className={style.coba}>2</Button>
                                            </Link>
                                        </Col>
                                        <Col md="1" style={{ marginLeft: "20px" }}>
                                            <Link href={{ pathname: '/gallery' }}>
                                                <Button className={style.coba}>3</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Container>

                            </div>

                        </div>


                    </Col>
                    <Col md="4" sm="12">
                        <div className="vh-100 d-flex justify-content-top align-items-top" style={{ marginLeft: "-70px", marginTop: "100px" }}>
                            <img src="/images/exhibition/image3.jpg" width="564" height="705" />
                        </div>
                    </Col>
                    <Col md="4" sm="12">

                        <Container style={{ marginLeft: "70px", marginTop: "100px" }}>
                            <Row>
                                <img src="/images/exhibition/image4.png" width="350" height="350" />
                            </Row>
                            <Row style={{ marginTop: "55px" }}>
                                <img src="/images/exhibition/image2.jpg" width="300" height="300" />
                            </Row>

                        </Container>
                    </Col>
                </Row>
                <Row className={style.quotes} style={{ marginTop: "-150px" }}>
                    "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful." - Aristotle
                </Row>

            </Container>
        </>
    )

}