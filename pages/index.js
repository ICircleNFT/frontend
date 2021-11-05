import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import style from "../Styles/Home.module.css"
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
              </Container>

            </div>
          </Col>
          <Col md="5" sm="12" style={{ paddingLeft: "33px", marginTop: "-52px" }}>
            <div className="vh-100 d-flex justify-content-end align-items-center" style={{ marginLeft: "45px" }}>
              <Image src="/images/lemniscate_word.png" width="1000" height="1000" />
            </div>
          </Col>
          <Col md="1" sm="12">
            <div className="vh-100 d-flex justify-content-center align-items-end" style={{ marginRight: "-80px" }}>
              <div className={style.links}>
                <a href="https://discord.gg/GSkBdeuG2F" target="_blank" >
                  <Image src="/images/discord-logo.png" width="50" height="50" className={style.socmed} />
                </a>
                <br></br>
                <a href="https://www.instagram.com/icircle_nft/" target="_blank" >
                  <Image src="/images/instagram-logo.png" width="50" height="50" className={style.socmed} />
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