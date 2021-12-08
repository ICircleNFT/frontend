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
  border: none;
  padding: 0

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`




export default function Home() {
  return (
    <Container className={`position-relative ${style.mainContainer}`}>
      <Row className="h-100">
        <Col>
          <Row className="flex-lg-row flex-column-reverse">
            <Col lg="7">
              <h1 className={style.title}>I Circle</h1>
              <p className={style.subtitle}>
                Lemniscate is any of several figure-eight or ∞-shaped curves.
                The word comes from the Latin "lēmniscātus" meaning "decorated with ribbons". In Chinese mythology,
                it refers to eight immortal and luck. In another word, our logo represents love, luck, and eternity.
              </p>
              <div className={`mb-3 mb-sm-5 mx-auto mx-md-0 ${style.pagination}`}>
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
              <img  src="/images/lemniscate_word.png" className={`mx-lg-0 mx-auto ${style.img}`} />
            </Col>
          </Row>
        </Col>
        <Col lg="1">
          <div className={`mx-auto d-flex align-items-lg-end h-100 position-relative mb-3 mt-3 mt-md-0 ${style.links}`}>
            <Row className={`flex-lg-column mx-auto ${style.socmedContainer}`}>
              <Col>
                <a href="https://entrepot.app/" target="_blank" >
                  <img src="/images/entrepot-logo.png" width="50" height="50" className={style.socmed} />
                </a>
              </Col>
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
                <a href="https://twitter.com/icircle_nft" target="_blank" >
                  <img src="/images/twitter-logo.png" width="50" height="50" className={style.socmed} />
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