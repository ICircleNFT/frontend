import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import style from "../Styles/Home.module.css"
import Link from 'next/link'


export default function Arts() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="vh-100 d-flex align-items-top justify-content-center" >
                            <Container>
                                <Row>
                                    <Col>
                                        <h1 className={style.title}>ROADMAP</h1>
                                    </Col>
                                </Row>
                                <Row >

                                </Row>
                            </Container>

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
                <Row>
                    <div style={{ marginLeft: "-40px", marginTop: "-650px" }}>
                        <Image src="/images/roadmap.png" width="1702" height="361" />
                    </div>
                </Row>
                <Row>
                    <Container style={{ marginTop: "-300px", marginLeft: "30px" }}>
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

                <Row className={style.quotes}>
                    "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful." - Aristotle
                </Row>
            </Container>
        </>
    )
}