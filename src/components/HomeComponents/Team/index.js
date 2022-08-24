import React from 'react';
import * as C from './styles';
import Wave from 'react-wavify';
import { Row, Col, Container, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import kevin from '../../../assets/img/team/kevin.jpg';
import mateus from '../../../assets/img/team/mateus.jpg';
import julian from '../../../assets/img/team/Julian.jpg';
import { BsLinkedin, BsGithub  } from 'react-icons/bs';
import { MdEmail,  } from 'react-icons/md' ;



export function Team() {

    const tolTipJohn = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          kevinbfv@gmail.com
        </Tooltip>
      );

      const tolTipJulian = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         julyanreiss@hotmail.com
        </Tooltip>
      );

      const tolTipMateus = (props) => (
        <Tooltip id="button-tooltip" {...props}>
         oliveiramarinho789@gmail.com
        </Tooltip>
      );

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
                            <OverlayTrigger
                            placement="bottom"
                            delay={{show: 25, hide: 400}}
                            overlay={tolTipJohn}
                            >   
                            <C.LinkA>

                                <MdEmail size={32} />
                            </C.LinkA>
                            </OverlayTrigger>
                                 
                            <C.LinkA href='https://www.linkedin.com/in/john-kevin-3ba351184/' target='_blank'>
                                <BsLinkedin size={32} />
                            </C.LinkA>

                            <C.LinkA href='https://github.com/kev1nnnnnnn' target='_blank' size={32}>
                                <BsGithub size={32}/>    
                            </C.LinkA>
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
                        Desenvolvedor Front End UI/UX
                        </C.Text>
                        <C.CardIcon>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{show: 25, hide: 400}}
                                overlay={tolTipJulian}
                                >   
                                <C.LinkA>
                                    <MdEmail size={32} />
                                </C.LinkA>
                            </OverlayTrigger>
                            <C.LinkA href='https://www.linkedin.com/in/juliam-reis/' target='_blank'>
                                <BsLinkedin size={32} />
                            </C.LinkA>

                            <C.LinkA href='https://github.com/Julianreiss' target='_blank' size={32}>
                                <BsGithub size={32}/>    
                            </C.LinkA>
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
                        Desenvolvedor Back-End, Cloud 
                        </C.Text>
                        <C.CardIcon>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{show: 25, hide: 400}}
                                overlay={tolTipMateus}
                                >   
                                <C.LinkA>
                                    <MdEmail size={32} />
                                </C.LinkA>
                            </OverlayTrigger>

                            <C.LinkA href='https://www.linkedin.com/in/matheus-oliveira-67372816a/' target='_blank'>
                                <BsLinkedin size={32} />
                            </C.LinkA>

                            <C.LinkA href='https://github.com/matheusmoliveira' target='_blank' size={32}>
                                <BsGithub size={32}/>    
                            </C.LinkA>
                            
                        </C.CardIcon>
                    </Card.Body>
                </Card>
            </Col>
         
        </Row>
       
    </Container>


    </>
    )
}