import axios from 'axios';
import React, { useState } from 'react';
import { Escanear } from './Escanear';
import { CameraCapture } from './CameraCapture';
import { Encuesta } from './Encuesta';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imagenprueba from '../images/imagenprueba.jpg';
import pataslargas from '../images/pataslargas.jpg';
import viudanegrapng from '../images/viudanegrafb.jpg';
import violinistapng from '../images/violinistafb.jpeg';
import cebrapng from '../images/cebrafb.jpg';
import lincepng from '../images/lincefb.jpg';
import vaejovis from '../images/vaejovispng.jpg';
import argiope from '../images/argiopepng.jpg';
import centruroides from '../images/centruroidespng.jpg';

export const Detectar = () => {
    const [option, setOption] = useState(false);
    const [image, setImage] = useState(null);
    const [fileP, setFileP] = useState(null);
    const [idPrediction, setIdPrediction] = useState(null);
    const [result, setResult] = useState(null);
    const [infoSpider, setInfoSpider] = useState({
        nombre: '',
        impMedica: '',
        descripcion: '',
        img: null
    });
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => setShowError(true);

    async function predict() {
        const fileTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!image || !fileTypes.includes(image.type)) {
          alert('Solo se admiten archivos en formato .jpg, .png, or .webp');
          return -1;
        }
        const formData = new FormData();
        formData.append('file', image);

        axios.post('/predictions/predict', formData).then((response) => {
            if (response.data.status === 'success') {
                setIdPrediction(response.data.id);
                setResult(response.data.prediction);
                getInfoSpider(response.data.prediction);
                setShow(true);
            } else {
                handleShowError();
            }
        });
    }

    const getInfoSpider = (prediction) => {
        const imagenes = [argiope, imagenprueba, centruroides, cebrapng, viudanegrapng, violinistapng, lincepng, pataslargas, vaejovis];
        const data = { idSpider: prediction + 1 };
        axios.get('/predictions/infoSpider', { params: data }).then((response) => {
            setInfoSpider({
                nombre: response.data.species,
                impMedica: response.data.medicallySignificant,
                descripcion: response.data.description,
                img: imagenes[prediction]
            })
        });
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h1>{infoSpider.nombre}</h1><p><i>{infoSpider.impMedica ? <font color="red">Importancia médica</font> : <font color="green">Sin importancia médica</font>}</i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row><Col></Col><Col><img src={infoSpider.img} className="img-fluid" alt="Spider"></img></Col><Col></Col></Row>
                    <Row>
                        <Col>
                            <p className="text-center">{infoSpider.descripcion}</p>
                        </Col>
                    </Row>
                    <Encuesta idPrediction={idPrediction} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Regresar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showError} onHide={handleCloseError} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    No se identificó ningún artropodo conocido por el sistema, intenta con otra imagen.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <font color="white">
            <center>
                <h1 className='text-center'>DETECTOR DE ARAÑAS Y ALACRANES</h1>
                <h3 className='text-center'>Toma la fotografía de la araña que quieras identificar o bien, sube una desde tu dispositivo. </h3> <h4>Se recomienda tomar la imagen con una distancia aproximadamente de 20 cm del artrópodo</h4><br></br>
                </center> 
            </font>
            <div className="btn-group">
                <button
                    type="button"
                    className={`btn btn-secondary left-btn ${option === false ? 'active' : ''}`}
                    onClick={() => setOption(false)}>
                    Subir imagen
                </button>
                <button
                    type="button"
                    className={`btn btn-secondary right-btn ${option === true ? 'active' : ''}`}
                    onClick={() => setOption(true)}>
                    Tomar Foto
                </button>
            </div>
            <div className="boxImagePhoto">
                {option ? <CameraCapture setFileP={setFileP} setImage={setImage} predict={predict} /> : <Escanear setFileP={setFileP} setImage={setImage} predict={predict} />}
            </div>
        </div>
    );
};
