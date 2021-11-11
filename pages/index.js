import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import style from "../Styles/Home.module.css";
import Link from 'next/link';
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
const A = styled.a`
  background: transparent;
`



export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md="6" sm="12">
            <div className="vh-100 d-flex align-items-top justify-content-center" >
              <Container>
                <Row>
                  <Col>
                    <h1 className={style.title}>I Circle</h1>
                  </Col>
                </Row>
                <Row >
                  <Col>
                    <p className={style.subtitle}>Lemniscate is any of several figure-eight or ∞-shaped curves.
                      The word comes from the Latin "lēmniscātus" meaning "decorated with ribbons". In Chinese mythology,
                      it refers to eight immortal and luck. In another word, our logo represents love, luck, and eternity.</p>
                  </Col>
                </Row>
                <Row>
                  <Container style={{ marginTop: "20px" }}>
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
                    </Row>
                  </Container>
                </Row>

              </Container>

            </div>
          </Col>
          <Col md="5" sm="12" style={{ paddingLeft: "33px", marginTop: "-52px" }}>
            <div className="vh-100 d-flex justify-content-end align-items-center" style={{ marginLeft: "45px" }}>
              <img src="/images/lemniscate_word.png" width="500" height="500" />
            </div>
          </Col>
          <Col md="1" sm="12">
            <div className="vh-100 d-flex justify-content-center align-items-end" style={{ marginRight: "-300px" }}>
              <div className={style.links}>
                <Link href={{ pathname: '/wallet' }}>
                  <a className={style.pages}>
                    <img src="/images/wallet.png" width="50" height="50" className={style.socmed} />
                  </a>
                </Link>
                <br></br>
                <a href="https://discord.gg/GSkBdeuG2F" target="_blank" >
                  <img src="/images/discord-logo.png" width="50" height="50" className={style.socmed} />
                </a>
                <br></br>
                <a href="https://www.instagram.com/icircle_nft/" target="_blank" >
                  <img src="/images/instagram-logo.png" width="50" height="50" className={style.socmed} />
                </a>
                <br></br>
                <a href="https://github.com/ICircleNFT" target="_blank" >
                  <img src="/images/GitHub-Mark-32px.png" width="50" height="50" className={style.socmed} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={style.quotes}>
          "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful." - Aristotle
        </Row>
      </Container>
    </>
  )
}