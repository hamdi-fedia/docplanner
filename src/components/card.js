import React from 'react'
import style from '../css/style.css'
import {Container,Row,Col,Card } from 'react-bootstrap'

function Cardsectionone(){
    return(<div>
        <Container className="d-flex justify-content-center mt-5 card-s1">
          <Row>
             <Col xs={12} md={4}>
             <Card className="card-1" >
              <Card.Body>
                  <img src="/img/icon-patients.svg"></img>
                  <Card.Title>For patients</Card.Title>
                 
                  <Card.Text>
                  Find a doctor, book a visit and solve any health-related doubt
                  </Card.Text>
                  <div className="style-select">
							<select data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="http://www.doctoraliar.com">Argentina</option>
																	<option value="http://www.doctoralia.com.br">Brazil</option>
																	<option value="http://www.doctoralia.cl">Chile</option>
																	<option value="http://www.doctoralia.co">Colombia</option>
																	<option value="http://www.znamylekar.cz">Czech</option>
																	<option value="http://www.miodottore.it">Italy</option>
																	<option value="http://www.doctoralia.com.mx">Mexico</option>
																	<option value="http://www.doctoralia.pe">Peru</option>
																	<option value="http://www.znanylekarz.pl">Poland</option>
																	<option value="http://www.doctoralia.com.pt">Portugal</option>
																	<option value="http://www.doctoralia.es">Spain</option>
																	<option value="http://www.doktortakvimi.com">Turkey</option>
															</select>
						</div>
              </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4}>
             <Card className="card-2" >
              <Card.Body>
              <img src="/img/icon-doctors.svg"></img>
                  <Card.Title>For doctors</Card.Title>
                  <Card.Text>
                  Save time managing visits and cut no-shows by half
                  </Card.Text>
                  <div class="style-select">
							<select data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="https://academy.doctoraliar.com">Argentina</option>
																	<option value="https://academy.doctoralia.com.br">Brazil</option>
																	<option value="https://academy.doctoralia.cl">Chile</option>
																	<option value="https://academy.doctoralia.co">Colombia</option>
																	<option value="https://lekar.znamylekar.cz">Czech</option>
																	<option value="https://phone.docplanner.de/#/">Germany</option>
																	<option value="https://dottori.miodottore.it">Italy</option>
																	<option value="https://academy.doctoralia.com.mx">Mexico</option>
																	<option value="https://academy.doctoralia.pe">Peru</option>
																	<option value="https://lekarz.znanylekarz.pl">Poland</option>
																	<option value="https://academy.doctoralia.es">Spain</option>
																	<option value="https://uzman.doktortakvimi.com">Turkey</option>
															</select>
						</div>
              </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4}>
             <Card className="card-3" >
              <Card.Body>
              <img src="/img/icon-clinics.svg"></img>
                  <Card.Title>For clinics</Card.Title>
                  <Card.Text>
                  Deliver an exceptional patient experience in your clinic
                  </Card.Text>
                 
						<div class="style-select">
							<select data-id="domain-switcher">
								<option>2 to 20 specialists</option>
																	<option value="http://clinicas.doctoralia.com.br/software-de-gestao-para-clinicas-e-centros">Brazil</option>
																	<option value="http://lekar.znamylekar.cz/pro-zarizeni">Czech</option>
																	<option value="http://centrimedici.miodottore.it/saas/funzionalita">Italy</option>
																	<option value="http://clinicas.doctoralia.com.mx/software-gestion-clinicas">Mexico</option>
																	<option value="http://placowka.znanylekarz.pl/system-od-znanylekarz">Poland</option>
																	<option value="http://clinicas.doctoralia.es/software-gestion-clinicas">Spain</option>
																	<option value="http://kurumsal.doktortakvimi.com">Turkey</option>
															</select>
						</div>
						<div class="style-select">
							<select data-id="domain-switcher">
								<option>More than 20 specialists</option>
																	<option value="http://clinicas.doctoralia.com.br/tuotempo">Brazil</option>
																	<option value="http://centrimedici.miodottore.it/marketplace/funzionalita">Italy</option>
																	<option value="http://clinicas.doctoralia.com.mx/tuotempo">Mexico</option>
																	<option value="http://placowka.znanylekarz.pl/poznaj-tuotempo">Poland</option>
																	<option value="http://clinicas.doctoralia.es/tuotempo">Spain</option>
															</select>
						</div>
					
              </Card.Body>
              </Card>
             </Col>
          </Row>
         </Container>
         <Container className="mt-4 part">
         <Row className="mt-1">
              <Col xs={12} md={4}>
               <h3>
               We are a global <br></br> company <br></br> with local culture
               </h3>
              </Col>
              <Col xs={12} md={8}>
                <Row className="mt-2 img-part">
                <Col xs={4} md={3}>
                   <img src="/img/1.png"></img>
                </Col>
                <Col xs={4} md={3}>
                   <img src="/img/2.png"></img>
                </Col>
                <Col xs={4} md={3}>
                   <img src="/img/3.png"></img>
                </Col>
                <Col xs={4} md={3}>
                   <img src="/img/4.png"></img>
                </Col>
                <br></br>
                <br></br>
                <Col xs={4} md={3}>
                   <img src="/img/5.png"></img>
                </Col>
                <Col xs={4} md={3}>
                   <img src="/img/6.png"></img>
                </Col>
                <Col xs={4} md={2}>
                   <img src="/img/logo-gipo.svg" className="height-img"></img>
                </Col>
                <Col xs={4} md={2}>
                   <img src="/img/logo-clinicloud.svg" className="height-img"></img>
                </Col>

                </Row>
              </Col>
          </Row>

         </Container>
  
  </div>)
}


export default Cardsectionone