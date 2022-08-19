import React from 'react';
import * as C from './styles';
import Wave from 'react-wavify';
import { Row, Col, Container, Card } from 'react-bootstrap';
import kevin from '../../../assets/img/team/kevin.jpg';
import mateus from '../../../assets/img/team/mateus.jpg';
import julian from '../../../assets/img/team/Julian.jpg';
import { BsLinkedin, BsGithub  } from 'react-icons/bs';
import { MdEmail,  } from 'react-icons/md' ;



export function Team() {

    return(
        <>
        <Container fluid className="mainTeam">  
    
            <C.TitleTop id="team" >Team</C.TitleTop>
            <C.SubTitleTop>Nosso time é composto por sócios especializados na área de tecnologia</C.SubTitleTop>
            <Row>
           
             <Col>
                <Card style={{ width: '25rem' }} className="border-0 text-center bg-transparent card">
                   <C.Image src={kevin} ></C.Image>
                    <Card.Body>
                        <C.Title>John Kevin</C.Title>
                        <C.Text>
                        Analista e desenvolvedor Full-Stack
                        </C.Text>

                        <C.CardIcon>
                            <MdEmail size={32} />
                            <BsLinkedin size={32} />
                            <BsGithub size={32} />    
                        </C.CardIcon>
                     
                    </Card.Body>
                </Card>
            </Col>
             <Col>
                <Card style={{ width: '25rem' }} className="border-0 text-center bg-transparent card">
                <C.Image src={julian} ></C.Image>
                    <Card.Body>
                        <C.Title>Julian Reis</C.Title>
                        <C.Text>
                        Desenvolvedor Front End UI/UX - Usabilidade, interface e interação
                        </C.Text>
                        <C.CardIcon>
                            <MdEmail size={32} />
                            <BsLinkedin size={32} />
                            <BsGithub size={32} />    
                        </C.CardIcon>
                    </Card.Body>
                </Card>
            </Col>

             <Col>
                <Card style={{ width: '25rem' }} className="border-0 text-center bg-transparent card">
                <C.Image src={mateus} ></C.Image>
                    <Card.Body>
                        <C.Title>Matheus Marinho</C.Title>
                        <C.Text>
                        Desenvolvedor Back-End 
                        </C.Text>
                        <C.CardIcon>
                            <MdEmail size={32} />
                            <BsLinkedin size={32} />
                            <BsGithub size={32} />    
                        </C.CardIcon>
                    </Card.Body>
                </Card>
            </Col>
         
        </Row>
       
    </Container>


    </>
    )
}