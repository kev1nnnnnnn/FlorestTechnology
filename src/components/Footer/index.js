import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Wave from 'react-wavify'
export function Footer() {
  return (
    <Container fluid id="footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <Wave mask="url(#mask)" fill="rgba(1, 32, 38, 1)">
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </Wave>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>
              Conecte-se conosco nas redes sociais e solicite seu orçamento
              gratuito:
            </span>
          </div>

          <div>
            <a as={Link} to="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a as={Link} to="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a as={Link} to="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a as={Link} to="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a as={Link} to="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a as={Link} to="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Florest Technology
                </h6>
                <p>
                  Empresa especializada em desenvolvimento de software,
                  sistemas, sites e aplicativos!
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Desenvolvemos</h6>
                <p>
                  <a as={Link} to="#" className="text-reset">
                    Sites estáticos
                  </a>
                </p>
                <p>
                  <a as={Link} to="#" className="text-reset">
                    sistemas dinâmicos
                  </a>
                </p>
                <p>
                  <a as={Link} to="#" className="text-reset">
                    Aplicativos
                  </a>
                </p>
                <p>
                  <a as={Link} to="#" className="text-reset">
                    Sistema de gerenciamento + Aplicativo
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-3 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contatos</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Av. Constantino Nery, 2533 - Chapada, Manaus - AM
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  contato@floresttechnology.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> (92) 99608-0250
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> (92) 98124-0928
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2022 Copyright:
          <a
            className="text-reset fw-bold ml-2"
            href="www.floresttechnology.com"
            target="_blank"
          >
            www.floresttechnology.com
          </a>
        </div>
      </MDBFooter>
    </Container>
  )
}
