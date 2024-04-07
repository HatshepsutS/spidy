import * as tf from '@tensorflow/tfjs';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
    const [option, setOption] = useState(false);//false => render module  Escanear | true => render module CameraCapture

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function predict() {
        const formData = new FormData();
        formData.append('file', image);

        axios.post('/predictions/predict', formData).then((response) => {
            setIdPrediction(response.data.id);
            console.log(response.data.id)
            setResult(response.data.prediction);
            getInfoSpider(response.data.prediction);
            handleShow();
        });
    }





    const getInfoSpider = (prediction) => {
        const imagenes = [argiope,imagenprueba,centruroides,cebrapng, viudanegrapng, violinistapng,lincepng,  pataslargas,vaejovis];
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
                    <div class="mt-2 mb-2 ms-2 me-2 ">
                        <Row ><Col></Col><Col><img src={infoSpider.img} class="img-fluid" ></img></Col><Col></Col></Row>
                        <Row>
                            <Col>
                                <p className="text-center">{infoSpider.descripcion}</p>
                            </Col>
                        </Row>
                    </div>
                    <Encuesta idPrediction={idPrediction} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" id="escaner" onClick={handleClose}>
                        Regresar
                    </Button>
                </Modal.Footer>
            </Modal>
            <font color="white">
                <h1 className='text-center'>ANALIZADOR DE ARAÑAS</h1>
                <h3 className='text-center'>Toma la fotografía de la araña que quieras identificar o bien, sube una desde tu dispositivo</h3> <br></br></font>
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


}