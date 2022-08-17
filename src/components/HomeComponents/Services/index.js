import React from "react";
import * as C from './styles';

import { Row, Col, Container, Card } from 'react-bootstrap';
import {GoDeviceDesktop} from 'react-icons/go';
import {BsFillGearFill } from 'react-icons/bs';

export function Services() {

    return(

        <Container fluid className="main">
            <C.TitleTop>Serviços</C.TitleTop>
            <C.SubTitleTop>Nossos serviços a serem oferecidos</C.SubTitleTop>
            <Row>
               
                 <Col>
                    <Card style={{ width: '25rem' }} className="border-0 text-center">
                        <GoDeviceDesktop size={100} className="m-auto" color="#012026"  />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <C.Button variant="primary">Go somewhere</C.Button>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col>
                    <Card style={{ width: '25rem' }} className="border-0 text-center">
                        <BsFillGearFill size={100} className="m-auto" color="#012026" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <C.Button variant="primary">Go somewhere</C.Button>
                        </Card.Body>
                    </Card>
                </Col>

                 <Col>
                    <Card style={{ width: '25rem' }} className="border-0 text-center">
                        <GoDeviceDesktop size={100} className="m-auto" color="#012026" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <C.Button variant="primary">Go somewhere</C.Button>
                        </Card.Body>
                    </Card>
                </Col>
             
            </Row>
        </Container>


    );
}