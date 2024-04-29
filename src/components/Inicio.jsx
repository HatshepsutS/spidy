import React from 'react';

import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import mainPrueba from '../images/mainPage.png';
import logoSP from '../images/SpydyLogo.svg';
export const Inicio = () => {

  return (
    
    <>
   
   <Container fluid>
      <Row className="mb-4">
        <Col md={6} style={{ padding: 0 }}>
         
          <img src={mainPrueba} alt="Main" style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col md={6} style={{ padding: 5  }}>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h1><font color="white">¿Qué es?</font> </h1>
              </div>
              <div className="text-center">
              <img src={logoSP} alt="LogoSP" style={{ width: '60%', height: 'auto' }} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-container">
            <div class="text-center">
        <Button id="escaner" size="md" href="/Detectar">
          ¡Prueba la aplicación aquí!
        </Button>
        </div>

            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
      </>
    
  )
}
