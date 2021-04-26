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
                       <div className="title">fedia</div>
                   <Button variant="primary">Go somewhere</Button>
                   </Row>
                </Card.Body>
            </Card>
         </Col>    
         </Row>
     </Container>
    </div>)
}

export default Country