import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import style from "../Styles/Coba.module.css"
// import { Quotes } from "../components/Quotes"


export default function Coba() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="6" sm="12">
                        <div className={style.left}>
                            <h1 className={style.title}>I Circle</h1>
                            <p className={style.subtitle}>Lemniscate is any of several figure-eight or ∞-shaped curves.
                                The word comes from the Latin "lēmniscātus" meaning "decorated with ribbons". In Chinese mythology,
                                it refers to eight immortal and luck. In another word, our logo represents love, luck, and eternity.</p>
                        </div>
                    </Col>
                    <Col md="5" sm="12">
                        <Image src="/images/lemniscate_word.png" width="600" height="600" style={{ right: "0px" }} />
                    </Col>
                    <Col md="1" sm="12">
                        <div className={style.links}>
                            <a href="https://discord.gg/GSkBdeuG2F" target="_blank" >
                                <Image src="/images/discord-logo.png" width="50" height="50" className={style.socmed} />
                            </a>
                            <br></br>
                            <a href="https://www.instagram.com/icircle_nft/" target="_blank" >
                                <Image src="/images/instagram-logo.png" width="50" height="50" className={style.socmed} />
                            </a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}