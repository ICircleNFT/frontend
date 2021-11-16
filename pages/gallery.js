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
                        <div className="vh-100 d-flex justify-content-top align-items-top" style={{ marginLeft: "-70px", marginTop: "100px" }}>
                            <img src="/images/exhibition/image1.png" width="400" height="400" />
                            <div style={{ marginTop: "500px", marginLeft: "-400px" }}>
                                <h2 className={style.sneak}>SNEAK PEEK OF OUR ART </h2>
                                <p className={style.peek}>we want our art to be a part of our daily life.
                                    It's not just digital art but physical art as well.
                                </p>
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

            </Container>
        </>
    )

}