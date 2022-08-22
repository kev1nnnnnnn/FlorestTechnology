import Container from 'react-bootstrap/Container';
import {Nav, Navbar, Tooltip, OverlayTrigger} from 'react-bootstrap';

import logo from '../../assets/logo.png'
import * as C from './styles';
import { Link } from 'react-router-dom';

import { Team } from '../../components/HomeComponents/Team';

export function NavComponents() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      (92) 99608-0250
    </Tooltip>
  );

  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="" variant="dark" fixed='top'>
      <Container>
       {/* <C.Image src={logo} /> */}
       <Navbar.Brand as={Link} to='#' >Florest Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#team">Sobre nós</Nav.Link>
            <Nav.Link href="#footer">Contato</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <OverlayTrigger
            placement="left"
            delay={{show: 25, hide: 400}}
            overlay={renderTooltip}
            >
              <C.Button href="https://bit.ly/3dx8z4K" target="_blank">Entre em contato já!</C.Button>
          </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

