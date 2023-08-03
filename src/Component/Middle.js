import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';


const Middle = () => {
  return (
    <div>
        <Container fluid className='p-0'>
            <div className='header-img p-5'>
                <Row className='pt-5 px-0'>
                    <Col lg={6} md={6} className='mt-5 pt-5 px-0 text-white'>
                     <h1 className='fw-bold p-0'>We SEO Company That Will Help Your Business
                         Become Successful</h1>
                         <p className='fs-5 mt-3 px-3'>While we were not the first home cleaning 
                            company in the UK, we take pride in being
                             market leaders in introducing an in​stant 
                             online booking system plus the facility 
                             for our customers to login and control their 
                             cleaning service 24/7, 365 days a year putting
                              you in complete control.  </p>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Middle