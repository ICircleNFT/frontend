import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image'
import style from "../Styles/Home.module.css"


export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col md="5" sm="12">
            <div className="vh-100 d-flex justify-content-center align-items-center">
              <h1 className={style.title}>iCircle</h1>
            </div>
          </Col>
          <Col md="5" sm="12">
            <div className="vh-100 d-flex justify-content-center align-items-center">
              <Image src="/images/icircle-logo.png" width="1000" height="1000" />
            </div>
          </Col>
          <Col md="2" sm="12">
            
            <div className="vh-100 d-flex justify-content-center align-items-end">
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