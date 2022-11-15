import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from "react";

function NavBar(){

  const [showShip, setShowShip] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showCujo, setShowCujo] = useState(false);
  const [showVampire, setShowVampire] = useState(false);

    return(

        <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand onMouseEnter={() => setShowTypewriter(true)} onMouseLeave={() => setShowTypewriter(false)} className='brand' as={Link} to="/">STEPHEN KING's</Navbar.Brand>
          {showTypewriter && (
                <div>
                  <img src={require('../img/literatura.png')} height="25" className="navbar-typewriter" style={{color: "#fff !important"}} alt="Barco de papel" />
                </div>
            )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
            {showBalloon && (
                <div>
                  <img src={require('../img/globo.png')} height="20" className="navbar-balloon" style={{color: "#fff !important"}} alt="Barco de papel" />
                </div>
              )}
            {showShip && (
            <div >
              <img src={require('../img/origami.png')} height="30" className="navbar-ship" style={{color: "#fff !important"}} alt="Barco de papel" />
            </div>
            )}
            {showCujo && (
                <div>
                  <img src={require('../img/san-bernardo.png')} height="20" className="navbar-cujo" style={{color: "#fff !important"}} alt="Barco de papel" />
                </div>
            )}
            {showVampire && (
                <div>
                  <img src={require('../img/vampiro.png')} height="20" className="navbar-vampire" style={{color: "#fff !important"}} alt="Barco de papel" />
                </div>
            )}
              <Nav.Link onMouseEnter={() => setShowBalloon(true)} onMouseLeave={() => setShowBalloon(false)}><Link className="navbar-link" to='/'>INICIO</Link></Nav.Link>
              <Nav.Link onMouseEnter={() => setShowShip(true)} onMouseLeave={() => setShowShip(false)}><Link className="navbar-link" to='/login'>INICIAR SESIÓN</Link></Nav.Link>
              <Nav.Link onMouseEnter={() => setShowCujo(true)} onMouseLeave={() => setShowCujo(false)}><Link className="navbar-link" to='/registro'>REGISTRARSE</Link></Nav.Link>
              <Nav.Link onMouseEnter={() => setShowVampire(true)} onMouseLeave={() => setShowVampire(false)}><Link className="navbar-link" to='/productos/alta'>ALTA PRODUCTOS</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

/*         <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/registro'>Registro</Link></li>
        </ul>
    ) */
}

export default NavBar