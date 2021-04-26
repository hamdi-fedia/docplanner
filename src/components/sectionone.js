import React from 'react'
import style from '../css/style.css'
import {Container,Row,Col } from 'react-bootstrap'

function Sectionone(){
    return (
        <div>
        <Container className="text-center mt-5 ">
                  <img src="img/sygnet.png" className="mt-5" ></img>
                  <h1 className="marg">Making the healthcare experience more human</h1>
        </Container>
        <Container className=" mt-5 ">
             <Row>
                      <Col md="6">
                          <p className="text">
                            We want patients to find the perfect doctor and book
                            an appointment in the most easy way. The patient journey
                            should be enjoyable, and that's why we are always next to them: 
                            to help them find the best possible care. Anytime, anywhere.
                          </p>
                      </Col>
                      <div className="col-md-6">
                          <p>
                          We also help doctors to better manage their practice and 
                          build their online reputation. With our integrated end-to-end 
                          solution, doctors are able not only to improve their online presence,
                           but also to devote their time to what really matters: their patients.
                          </p>
                      </div>
                  </Row>
        </Container>
        </div>
    )
}

export default Sectionone




