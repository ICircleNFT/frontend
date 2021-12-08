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
                        <p className="mb-4">The best part about ICircles Artwork is that it instills a fresh vibe into its aesthetic. 
                        ICircle has the power to uplift the vibe of a place and make it look simply amazing. 
                        ICircle is not just an NFTs but can also be part of your daily life.
                        </p>
                        <div className={`mb-5 mb-sm-5 mx-auto mx-lg-0 ${style.pagination}`}>
                            <Row>
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
                    <Col lg="5">
                        <div className={`${style.card2} mb-4 mb-lg-0`} style={{backgroundImage: "url(/images/gallery/elika.jpg)"}} />
                    </Col>
                    <Col>
                        <div className={`${style.card3} mb-4 mb-lg-5`} style={{backgroundImage: "url(/images/gallery/ig.png)"}} />
                        <div className={`${style.card4} mt-1`} style={{backgroundImage: "url(/images/gallery/a1_56.png)"}} />
                    </Col>
                    
                </Row>
                <div className={`mx-auto text-center ${style.quotes}`}>
                    "You don't have to be a mathematician to have a feel for numbers ." - John Nash
                </div>

            </Container>
    )

}