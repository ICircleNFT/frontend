import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// import Image from 'next/image'
import style from "../Styles/Home.module.css"
import Link from 'next/link'
// import { Quotes } from "../components/Quotes"


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
                      <Col md="1" style={{ marginLeft: "-69px" }}>
                        <a className={style.pages}>PAGE</a>
                      </Col>
                      <Col md="1" style={{ marginLeft: "20px" }}>
                        <Link href={{ pathname: '/' }}>
                          <a className={style.pages}>HOME</a>
                        </Link>
                      </Col >
                      <Col md="1" style={{ marginLeft: "30px" }}>
                        <Link href={{ pathname: '/arts' }}>
                          <a className={style.pages}>1</a>
                        </Link>
                      </Col>
                      <Col md="1" style={{ marginRight: "-20px" }}>
                        <Link href={{ pathname: '/roadmap' }}>
                          <a className={style.pages}>2</a>
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
                <a href="https://discord.gg/GSkBdeuG2F" target="_blank" >
                  <img src="/images/discord-logo.png" width="50" height="50" className={style.socmed} />
                </a>
                <br></br>
                <a href="https://www.instagram.com/icircle_nft/" target="_blank" >
                  <img src="/images/instagram-logo.png" width="50" height="50" className={style.socmed} />
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