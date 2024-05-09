import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import picaduraarania from '../images/picaduraarania.jpg';
import picaduraalacran from '../images/picaduraalacran.jpg';
import Table from 'react-bootstrap/Table';
export const Emergencias = () => {
  return (
    <>
      <div>
        <h1 style={{ color: 'white', textAlign: 'center' }}>¿Qué hacer en caso de picaduras de un artrópodo?</h1>
        <br /><br />
        <Container>
          <Row className="p-3 mb-2 bg-secondary text-white">
            <Col md={6}>
              <h3>Para tratar una picadura de araña:</h3>
              <p>

                <ul>
                  <li>Lava la herida con agua y jabón suave.</li>
                  <li>Aplica un paño frío o hielo sobre la picadura.</li>
                  <li>Eleva el área afectada si es posible.</li>
                  <li>Considera tomar un analgésico de venta libre si necesitas.</li>
                </ul>
            
              </p>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={picaduraarania}
                    alt="Picadura de araña"
                  />
                  <Carousel.Caption>
                    <p>Picadura de una araña violinista (Loxosceles)</p>
                  </Carousel.Caption>
                </Carousel.Item>
              
              </Carousel>
              <br></br>
              <p>    Comúnmente, una mordida de araña se parece a cualquier otra picadura de insecto —una protuberancia roja, inflamada, a veces con comezón o dolorosa en la piel— y puede incluso pasar desapercibida. Las mordidas de arañas inofensivas, por lo general, no producen ningún otro síntoma.
Muchas llagas en la piel se parecen pero tienen otras causas, como una infección bacteriana.
Las mordidas de algunas arañas, como la araña viuda negra (Lactrodectus) y la araña violinista (Loxosceles), pueden causar signos y síntomas graves.</p>
            </Col>
            <Col md={6}>
              <h3>Para tratar una picadura de alacrán:</h3>
              <p>
                <ul>
                  <li>Identifica el tipo de alacrán si es posible.</li>
                  <li>Lava la zona de la picadura con agua y jabón.</li>
                  <li>Aplica compresas frías y eleva la extremidad afectada.</li>
                  <li>En caso de síntomas severos, busca atención médica inmediatamente.</li>
                </ul>
                </p>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={picaduraalacran}
                    alt="Picadura de alacrán"
                  />
                  <Carousel.Caption>
                    <p>Picadura de un alacrán Vaejovis</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
              </Carousel>
<br></br>
              <p> Las picaduras de escorpión son dolorosas, pero rara vez ponen en peligro la vida. Los adultos sanos generalmente no necesitan tratamiento para las picaduras de escorpión. Los niños pequeños y los adultos mayores tienen mayor riesgo de sufrir complicaciones graves.
            Las reacciones a estas picaduras posteriores a veces son lo suficientemente graves como para causar una afección que pone en riesgo la vida. Esta afección se conoce como anafilaxia. En estos casos, los síntomas son similares a los de la anafilaxia causada por las picaduras de abejas y pueden incluir urticaria, dificultad para respirar, náuseas y vómitos.
               </p>
            </Col>
          </Row>
        </Container>
        <br /><br />
        <Container>
          <Row className="p-3 mb-2 bg-danger text-white">
            <Col>
              <h2>Números de emergencia</h2>
              <div className="container mt-4">
      <h4>Números Generales</h4>
      <p>  
      <Table>
        <thead>
          <tr>
            <th>Emergencias Generales</th>
            <th>Denuncia Anónima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>911</td>
            <td>089</td>
          </tr>
        </tbody>
      </Table>
      </p>
      <h4>Números Específicos por Estado</h4>
      
      <p>
      <Table>
        <thead >
          <tr>
            <th>Estado</th>
            <th>Bomberos</th>
            <th>Cruz Roja</th>
            <th>Protección Civil</th>
            <th>Secretaría de Medio Ambiente</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jalisco</td>
            <td>(33) 3619 5152</td>
            <td>(33) 3613 6060</td>
            <td>(33) 3030 8250</td>
            <td>(33) 3030 4500</td>
          </tr>
          <tr>
            <td>Michoacán</td>
            <td>(443) 322 2170</td>
            <td>(443) 312 1212</td>
            <td>(443) 322 5600</td>
            <td>(443) 314 0334</td>
          </tr>
          <tr>
            <td>Estado de México</td>
            <td>(722) 217 8121</td>
            <td>(722) 214 5911</td>
            <td>(722) 213 7000</td>
            <td>(722) 275 6800</td>
          </tr>
          <tr>
            <td>Ciudad de México</td>
            <td>(55) 5768 3700</td>
            <td>(55) 5557 5757</td>
            <td>(55) 5683 2222</td>
            <td>(55) 5278 9931</td>
          </tr>
        </tbody>
      </Table>
      </p>
    </div>
              
              </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
