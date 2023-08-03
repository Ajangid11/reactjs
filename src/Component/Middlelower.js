import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'

function Middlelower () {
  return (
    <div>
        <Container fluid className='p-0'>
            <Row className='p-0'>
                <Col lg={5} md={5} sm={12} className=' p-0 '>  
                    <Image src='https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/942a5ee511055b0a99fadbae/pexels-photo-3137038.jpeg' fluid />
                </Col>
                <Col lg={7} md={7} sm={12}>
                    <div className='p-5 mt-5'>
                        <h1 className='fw-bold ps-4'>About Collaboration</h1>
                        <p className='mt-4 fw-light ps-4 fs-4'>Podcasting operational change management
                             inside of workflows to establish a framework. 
                             Taking seamless key performance indicators
                              offline to maximise the long tail. Keeping 
                              your eye on the ball while performing a deep
                               dive on the start-up mentality to derive 
                               convergence on cross-platform integration. 
                               Objectively innovate empowered manufactured
                                products whereas parallel platforms. 
                                Holisticly predominate extensible testing
                                 procedures for reliable supply chains. 
                                 Dramatically engage top-line web services
                                  vis-a-vis cutting-edge deliverables.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Middlelower