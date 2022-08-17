import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';
export  function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <Wave mask="url(#mask)" fill="rgba(1, 32, 38, 1)">
             
             <linearGradient id="gradient" gradientTransform="rotate(90)">
             <stop offset="0" stopColor="white" />
             <stop offset="0.5" stopColor="black" />
             </linearGradient>
             <mask id="mask">
             <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
             </mask>
         
     </Wave>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a as={Link} to="" className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a as={Link} to="" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a as={Link} to="" className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a as={Link} to="" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a as={Link} to="" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a as={Link} to="" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Produtos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-3 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contatos</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Av. Constantino Nery, 2533 - Chapada, Manaus - AM
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                floresttecnology@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: 
        <a className='text-reset fw-bold ml-2' as={Link} to="">
          www.floresttecnology.com
        </a>
      </div>
    </MDBFooter>
  );
}