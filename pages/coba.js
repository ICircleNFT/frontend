import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import style from "../Styles/Coba.module.css"
import Link from 'next/link'
// import { Quotes } from "../components/Quotes"


export default function Coba() {
    return (
        <>
            <Container style={{ width: "100%", height: "100vh" }}>
                <Row>
                    <Col md="6" sm="12" style={{ marginLeft: "30px" }}>
                        <div className={style.left}>
                            <h1 className={style.title}>I Circle</h1>
                            <p className={style.subtitle}>Lemniscate is any of several figure-eight or ∞-shaped curves.
                                The word comes from the Latin "lēmniscātus" meaning "decorated with ribbons". In Chinese mythology,
                                it refers to eight immortal and luck. In another word, our logo represents love, luck, and eternity.</p>
                            <Container style={{ marginTop: "40px", marginLeft: "-23px" }}>
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
                        </div>
                    </Col>
                    <Col md="5" sm="12">
                        <div className="vh-100 d-flex justify-content-end align-items-center" style={{ paddingLeft: "33px", marginTop: "-52px" }}>
                            <Image src="/images/lemniscate_word.png" width="460" height="460" />
                        </div>

                    </Col>
                    <Col md="1" sm="12">
                        <div className="vh-100 d-flex justify-content-center align-items-end" style={{ marginRight: "-300px" }}>
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
            </Container>
        </>
    )
}