import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import style from "../Styles/Arts.module.css"
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
                            ICircle is created by combining mathematical functions, applied geometry, creative coding, and aesthetic soul, which results in beautiful arts. 
                            ICircle will be fully minted as an NFTs on Internet Computer Blockchain. “Circle” plays a very important role in this generative art. 
                            A circle is the DNA of these NFTs. If you zoom in very closely into our art, you'll see that millions of circles build up into a masterpiece.
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
                        <Col md="5" className="d-flex align-items-center justify-content-center mb-md-0 mb-5">
                            <img src="/images/sarasvati.png" width="400" />
                        </Col>
                    </Row>
                </Col>
                <Col lg="1">
                    <div className={`mx-auto d-flex align-items-lg-end h-100 position-relative mb-3 mt-3 mt-md-0 ${style.links}`}>
                        <Row className={`flex-lg-column mx-auto bottom-0 ${style.socmedContainer}`}>
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
            "Mathematics has beauty and romance. It's not a boring place to be, the mathematical world.
            It's an extraordinary place; it's worth spending time there" -Marcus du Sautoy
            </div>
        </Container>
    )
}