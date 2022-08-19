import React from "react";
import * as C from './styles';

import { Row, Col, Container, Card } from 'react-bootstrap';
import { GoDeviceMobile, GoMegaphone } from 'react-icons/go';
import {BsCode, BsWifi } from 'react-icons/bs';
import { CgIfDesign } from 'react-icons/cg';
import { AiOutlineTeam } from 'react-icons/ai';

export function Services() {

    return(

        <Container fluid className="mainServices m-auto">
            <C.TitleTop>Serviços</C.TitleTop>
            <C.SubTitleTop>Como posso lhe ajudar no seu negócio?</C.SubTitleTop>
            <Row>
               
                 <Col>
                    <Card style={{ width: '25rem' }} className="border-0 border-transparent text-center cardService ">
                        <BsCode size={100} className="m-auto" color="#012026"  />
                        <Card.Body>
                            <C.Title>Desenvolvimento de sites</C.Title>
                            <C.Text>
                            Trabalho com desenvolvimento de sites modernos e dinâmicos para trazer excelentes resultados para o seu negócio!!
                            </C.Text>
                            <C.Button >Entre em contato</C.Button>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col>
                    <Card style={{ width: '25rem' }} className="border-0 border-transparent text-center cardService ">
                        <GoDeviceMobile size={100} className="m-auto" color="#012026" />
                        <Card.Body>
                            <C.Title>Desenvolvimento de aplicativos</C.Title>
                            <C.Text>
                            Aplicativos dinâmicos e para todas as plataformas, Android e IOS, tudo para ser o diferencial da sua empresa!!
                            </C.Text>
                            <C.Button >Entre em contato</C.Button>
                        </Card.Body>
                    </Card>
                </Col>

                 <Col>
                    <Card style={{ width: '25rem' }} className="border-0 border-transparent text-center cardService ">
                        <BsWifi size={100} className="m-auto" color="#012026" />
                        <Card.Body>
                            <C.Title>Infraestrutura de redes</C.Title>
                            <C.Text>
                            Não adianta ter uma aplicação de sucesso sem ela ter a capacidade de aguentar milhões de acessos simultâneos!
                            </C.Text>
                            <C.Button >Entre em contato</C.Button>
                        </Card.Body>
                    </Card>
                </Col>
             
            </Row>
            {/* 2º LINHA */}
            <Row>
               
               <Col>
                  <Card style={{ width: '25rem' }} className="border-0 border-transparent text-center cardService ">
                      <CgIfDesign size={100} className="m-auto" color="#012026"  />
                      <Card.Body>
                          <C.Title>Design UI/UX</C.Title>
                          <C.Text>
                          Fazer as minhas aplicações ficarem bonitas e acessíveis é extremamente importante, ainda bem que sou especialista nisso!!
                          </C.Text>
                          <C.Button >Entre em contato</C.Button>
                      </Card.Body>
                  </Card>
              </Col>
               <Col>
                  <Card style={{ width: '25rem' }} className="border-0 border-transparent text-center cardService ">
                      <AiOutlineTeam size={100} className="m-auto" color="#012026" />
                      <Card.Body>
                          <C.Title>Trabalho em equipe</C.Title>
                          <C.Text>
                          Sozinho não se chega a lugar nenhum, então trabalhar em equipe não é uma dificuldade, e sim uma dádiva!
                          </C.Text>
                          <C.Button >Entre em contato</C.Button>
                      </Card.Body>
                  </Card>
              </Col>

               <Col>
                  <Card style={{ width: '25rem' }} className="border-0 border-transparent text-center cardService ">
                      <GoMegaphone size={100} className="m-auto" color="#012026" />
                      <Card.Body>
                          <C.Title>SEO &amp; Marketing Digital</C.Title>
                          <C.Text>
                          A aplicação ou produto precisa e deve atingir o máximo de pessoas possível, pois quem não é visto, não é lembrado!
                          </C.Text>
                          <C.Button >Entre em contato</C.Button>
                      </Card.Body>
                  </Card>
              </Col>
           
          </Row>
        </Container>


    );
}