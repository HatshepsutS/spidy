import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import picaduraarania from '../images/picaduraarania.jpg';
import picaduraalacran from '../images/picaduraalacran.jpg';

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
              <p>En caso de que te encuentres en una situación de emergencia, aquí tienes algunos números que podrían ser de utilidad:</p>
              <ul>

              <li> Emergencias – 911</li>
              <li>Bomberos (CDMX) – 55 8957 2692</li>
              <li>   Cruz roja mexicana – 55 1084 9000</li>
              <li>   Protección civil – 55 51 28 00 00</li>
              <li>    Policía federal – 088</li>
              <li>     Capufe – 074</li>
              <li>Ángeles verdes – 078</li>

                
              
              </ul>
              <p>Recuerda que estos números pueden variar dependiendo de tu ubicación geográfica. Siempre es una buena idea tener a mano los números específicos de tu localidad o país.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
