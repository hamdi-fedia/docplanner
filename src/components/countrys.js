import React from 'react'
import style from '../css/style.css'
import {Container,Row,Col,Card,Button } from 'react-bootstrap'

function Country(){
    return(<div >
     <Container className="mt-5">
        <Row>
         <div className="offices">
         <h1>
				Improve the lives of millions.
				Change&nbsp;yours forever
			</h1>
			<p>
				More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.
			</p>
         </div>
        </Row>
     </Container>
     <Container>

         <Row>

         <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/12.png" />
                <Card.Body>
                   <Row>
                       <div className="title">Warsaw</div>
                   <Button variant="primary">See openings</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
        
         <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/13.png" />
                <Card.Body>
                   <Row>
                       <div className="title">Barcelona</div>
                   <Button variant="primary">See openings</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
        
         <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/14.png" />
                <Card.Body>
                   <Row>
                       <div className="title">Istanbul</div>
                   <Button variant="primary">See openings</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
        
         </Row>
    
         <Row className="mt-4">

         <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/15.png" />
                <Card.Body>
                   <Row>
                       <div className="title">Rome</div>
                   <Button variant="primary">See openings</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
        
         <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/16.png" />
                <Card.Body>
                   <Row>
                       <div className="title">Bologna</div>
                   <Button variant="primary">See openings</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
        
         <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/17.png" />
                <Card.Body>
                   <Row>
                       <div className="title">Curitiba</div>
                   <Button variant="primary">See openings</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
        
         </Row>
         <Row className="mt-4">

            <Col xs={12} md={4}>
            <Card>
                <Card.Img  src="/img/18.png" />
                <Card.Body>
                    <Row>
                        <div className="title">Mexico City</div>
                    <Button variant="primary">See openings</Button>
                    </Row>
                </Card.Body>
            </Card>
            </Col>    
        </Row>

    
     </Container>

     <Container className="mt-5">
        <Row>
         <div className="join-us">
			<h1>
				Sounds interesting? Join us now!
			</h1>
			<a href="/career" class="btn">See all current openings</a>
		
         </div>
        </Row>
     </Container>
    </div>)
}

export default Country