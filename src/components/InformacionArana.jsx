import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import imagenprueba from '../images/imagenprueba.jpg';
import viudanegraimg from '../images/viudanegra.jpg';
import pataslargas from '../images/pataslargas.jpg';
import argiope from '../images/bandeada.jpg';
import violinista from '../images/violinista.jpeg';
import linceverde from '../images/linceverde.jpg';
import tarantulapng from '../images/tarantulatransp.png';
import argiopepng from '../images/eremobatesfondob.jpg';
import viudanegrapng from '../images/viudanegrafb.jpg';
import violinistapng from '../images/violinistafb.jpeg';
import cebrapng from '../images/cebrafb.jpg';
import lincepng from '../images/lincefb.jpg';
import patonapng from '../images/pataslargasfb.jpg';
import vaejovis from '../images/vaejovis.jpg';
import vaejovispng from '../images/vaejovispng.jpg';
import centruroides from '../images/centruroides.jpg';
import centruroidespng from '../images/centruroidespng.jpg';
import cebra from '../images/cebra.jpeg';

export const InformacionArana = () => {
  // Estados y funciones para manejar la visibilidad de los modales
  const [show, setShow] = useState(new Array(9).fill(false));
  const handleClose = index => setShow(show.map((s, si) => (si === index ? false : s)));
  const handleShow = index => setShow(show.map((s, si) => (si === index ? true : s)));

  return (
    <>
      <div>
        <h1><center><font color="white">Artrópodos identificados por Spidy</font></center></h1>
        <br /><br />
        <h5><center><font color="white">Es importante destacar que Spidy tiene como fin la identificación precisa de las especies de arañas y alacranes más comunes en los estados de Jalisco, Michoacán, Estado de México y Ciudad de México (enlistadas a continuación), que contribuirá a la prevención de riesgos en la salud pública.  </font></center></h5>
      </div>
      
      {/* Sección de Arañas */}
      <h2 style={{ color: 'white', textAlign: 'center' }}>Arañas</h2>
    <Row xs={1} md={4} className="g-4 justify-content-center">
        {[
          { id: 0, img: viudanegraimg, title: 'Latrodectus', modalImg: viudanegrapng, modalTitle: 'Viuda negra', descriptionShort:'Las Latrodectus son unas arañas con muy mala reputación',descriptionLong:"La mordedura de esta araña provoca mucho miedo porque es hasta 15 veces más potente que el de una serpiente de cascabel. En los humanos, la mordedura produce dolor muscular, náuseas y parálisis del diafragma que provoca dificultad para respirar; pero, al contrario de la creencia popular, la mayor parte de las personas que reciben un mordisco no sufren graves consecuencias y, ni muchos menos, mueren. Pero la mordedura sí que puede ser mortal, normalmente entre los más pequeños, los mayores y los enfermos. Afortunadamente las muertes son muy escasas; las arañas no son agresivas y muerden solo en defensa propia", source:"National Geographic. (2023, 19 julio). Las «Latrodectus»  arañas con muy mala reputación. https://www.nationalgeographic.es/animales/viuda-negra"  },
          { id: 1, img: violinista, title: 'Loxosceles', modalImg: violinistapng, modalTitle: 'Violinista/Araña de rincón' , descriptionLong:" La mordedura de araña es sólo en defensa propia. Puede ocurrir durante todo el año, pero es más frecuente en primavera y verano. Su veneno Tiene propiedad necrotizante (muerte de tejido), hemolítica (muerte de los glóbulos rojos), vasculítica y coagulante. En la piel provoca graves alteraciones vasculares, con áreas de vasoconstricción y otras de hemorragia, que llevan rápidamente a la isquemia (falta de sangre) local y a la constitución de una placa gangrenosa.",descriptionShort:"Esta araña es de carácter más bien solitario y tímido. Prefiere como hábitat sitios de poco trasiego como desvanes, cobertizos o, sitios donde no hay mucho movimiento.", source:"ontificia Universidad Católica de Chile. (2017, October 6). La araña del rincón (LOXOSCELES LAETA) - Escuela de Medicina. Facultad De Medicina PUCDC. https://medicina.uc.cl/publicacion/la-arana-del-rincon-loxosceles-laeta/"},
          { id: 2, img: argiope, title: 'Argiope', modalImg: argiopepng, modalTitle: 'Bandeada de Jardín', descriptionLong:"Crea grandes telas en forma de espiral adornadas con un zigzag central de seda más gruesa conocido como estabilimento. Estas arañas suelen habitar en jardines y campos abiertos, donde se alimentan de insectos que quedan atrapados en sus telas. A pesar de su tamaño y apariencia llamativa, son inofensivas para los humanos.",descriptionShort:" La araña Argiope es conocida por sus impresionantes telas con diseños en zigzag. Son depredadoras pacíficas que suelen encontrarse en jardines.", source:'' },
          { id: 3, img: imagenprueba, title: 'Brachypelma', modalImg: tarantulapng, modalTitle: 'Tarántula', descriptionLong:"Las tarántulas del género Brachypelma se caracterizan por sus cuerpos robustos, patas peludas y un comportamiento generalmente dócil hacia los humanos. Originarias de América, estas arañas prefieren climas cálidos y secos. Aunque su mordedura puede causar molestias, generalmente no son peligrosas para los seres humanos. Son criaturas nocturnas que pasan la mayor parte del día escondidas bajo tierra en madrigueras.",descriptionShort:"Son conocidas por su tamaño impresionante y su naturaleza dócil, lo que las hace populares en el mundo de las mascotas exóticas.", source:'' },
          { id: 4, img: pataslargas, title: 'Physocyclus', modalImg: patonapng, modalTitle: 'Araña Patona',descriptionLong:"Estas arañas no tejen telas tradicionales, sino que capturan a sus presas con un método único: escupen una sustancia pegajosa que inmoviliza a sus víctimas. Prefieren habitar en rincones oscuros y húmedos de las casas y son completamente inofensivas para los humanos.",descriptionShort:"Las arañas Physocyclus son notables por sus larguísimas patas en relación con su cuerpo, lo que le permite moverse rápidamente.", source:'' },
          { id: 5, img: linceverde, title: 'Peucetia', modalImg: lincepng, modalTitle: 'Lince Verde',descriptionLong:"A diferencia de muchas otras arañas, la Peucetia no utiliza una tela para capturar insectos, sino que los caza activamente, lo que refleja su agilidad y velocidad excepcionales. Aunque es una visión común en jardines, esta araña rara vez interactúa con humanos y es inofensiva.",descriptionShort:"La araña lince verde, Peucetia, es conocida por su coloración verde vibrante, que utiliza para camuflarse entre las hojas mientras caza.", source:'' },
          { id: 6, img: cebra, title: 'Habronattus', modalImg: cebrapng, modalTitle: 'Araña Saltarina', descriptionLong:"Habronattus, parte de la familia de las arañas saltarinas, destaca por sus colores vivos y sus grandes ojos, que les proporcionan una excelente visión. Estas pequeñas pero ágiles arañas son diurnas, cazando insectos mediante la vista y saltando sobre ellos para atraparlos. A menudo se les encuentra en jardines y cerca de las casas, donde realizan un control natural de plagas. A pesar de su apariencia intimidante, son completamente inofensivas para los humanos.",descriptionShort:"Las arañas saltarinas Habronattus son conocidas por su visión aguda y su capacidad para saltar largas distancias para capturar a sus presas.", source:'' },
        ].map((spider, index) => (
          <Col key={spider.title}>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={spider.img} width="250" height="250" />
              <Card.ImgOverlay>
                <Card.Footer><br /><br /><center><h2>{spider.title}</h2>
                  <button onClick={() => handleShow(spider.id)} className="btn bg-transparent">
                    <a className="btnmore primary"><span>Más información</span></a>
                  </button></center></Card.Footer>
                <Modal show={show[spider.id]} onHide={() => handleClose(spider.id)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title><h1>{spider.title}</h1><p><i><font color="red">{spider.modalTitle}</font></i></p></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={spider.modalImg} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end"> {spider.descriptionShort}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                        {spider.descriptionLong}
                          </p>
                          <br></br><p><i><font color="gray">{spider.source}</font></i></p>
                      </Col>
                    </Row></div>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" id="escaner" onClick={() => handleClose(spider.id)}>
                      Regresar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
<br></br>
      {/* Sección de Alacranes */}
      <h2 style={{ color: 'white', textAlign: 'center' }}>Alacranes</h2>
    <Row xs={1} md={4} className="g-4 justify-content-center">
        {[
          { id: 7, img: centruroides, title: 'Centruroides', modalImg: centruroidespng, modalTitle: 'Centruroides', descriptionLong:"Los Centruroides son un género de alacranes que se encuentran principalmente en el sur de Estados Unidos, México y Centroamérica. Algunas especies de este género, como el Centruroides sculpturatus, son conocidas por poseer un veneno que puede causar síntomas severos en humanos, incluyendo dolor intenso, entumecimiento y en casos raros, complicaciones graves. A pesar de su reputación, la mayoría de las picaduras se manejan con éxito mediante atención médica.",descriptionShort:"Los alacranes del género Centruroides son conocidos por su veneno potente, siendo algunos capaces de causar problemas de salud significativos en humanos.", source:'' },
          { id: 8, img: vaejovis, title: 'Vaejovis', modalImg: vaejovispng, modalTitle: 'Vaejovis', descriptionLong:"El género Vaejovis incluye una amplia variedad de alacranes distribuidos por Norteamérica. Estas especies suelen ser de tamaño pequeño a mediano y poseen un veneno que, aunque puede causar dolor y malestar, raramente es considerado peligroso para los seres humanos. Vaejovis es un género estudiado activamente por su diversidad y adaptabilidad a diferentes entornos, desde desiertos hasta montañas.",descriptionShort:"Vaejovis es un género diverso de alacranes, con especies que varían considerablemente en tamaño y toxicidad, pero generalmente menos peligrosos para los humanos.", source:'' },
        ].map((scorpion, index) => (
          <Col key={scorpion.title}>
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={scorpion.img} width="250" height="250" />
              <Card.ImgOverlay>
                <Card.Footer><br /><br /><center><h2>{scorpion.title}</h2>
                  <button onClick={() => handleShow(scorpion.id)} className="btn bg-transparent">
                    <a className="btnmore primary"><span>Más información</span></a>
                  </button></center></Card.Footer>
                <Modal show={show[scorpion.id]} onHide={() => handleClose(scorpion.id)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title><h1>{scorpion.title}</h1></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={scorpion.modalImg} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end"> {scorpion.descriptionShort}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                        {scorpion.descriptionLong}
                          </p>
                          <br></br><p><i><font color="gray">{scorpion.source}</font></i></p>
                      </Col>
                    </Row></div>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" id="escaner" onClick={() => handleClose(scorpion.id)}>
                      Regresar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
      <br></br>
      <br /><br />
    </>
  );
};
