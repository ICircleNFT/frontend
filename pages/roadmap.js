import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import style from "../Styles/Home.module.css"
// import { Quotes } from "../components/Quotes"


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
                <Row>
                    <div style={{ marginLeft: "-40px", marginTop: "-550px" }}>
                        <Image src="/images/roadmap.png" width="1702" height="361" />
                    </div>
                </Row>
                <Row className={style.quotes}>
                    "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful." - Aristotle
                </Row>
            </Container>
        </>
    )
}