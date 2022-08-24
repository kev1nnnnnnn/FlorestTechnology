import React from 'react'
import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import * as C from './styles'

import { BsWhatsapp } from 'react-icons/bs'
import _img_contact from '../../../assets/img/contato.png'

export function Contact() {
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      (92) 99608-0250
    </Tooltip>
  )

  return (
    <Container className="mainContact">
      <Row>
        <Col md={6}>
          <C.subTitle>Entre em contato</C.subTitle>
          <C.Title>Entre em contato conosco agora mesmo!</C.Title>
          <C.Text>
            Ficou interessado em nosso trabalho? Ótimo, fique a vontade para nos
            enviar uma mensagem por WhatsApp e solicitar o seu orçamento, assim
            poderemos te ajudar da melhor maneira possível!
          </C.Text>
          <OverlayTrigger
            placement="right"
            delay={{ show: 25, hide: 400 }}
            overlay={renderTooltip}
          >
            <C.Button href="https://bit.ly/3dx8z4K" target="_blank">
              <BsWhatsapp size={32} color="#f5f5f5" />
              <C.TextButton>Entre em contato conosco</C.TextButton>
            </C.Button>
          </OverlayTrigger>
        </Col>

        <Col md={5}>
          <C.Image src={_img_contact} />
        </Col>
      </Row>
    </Container>
  )
}
