import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

function Footer () {
  return (
    <div>
        <Container fluid className='p-0'>
                <Row className='justify-content-center fs-3 p-0'>
                    <Col lg={6} className='text-center'>
                    <div className='p-4'>
                        Copyright @ 2023
                    </div>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Footer