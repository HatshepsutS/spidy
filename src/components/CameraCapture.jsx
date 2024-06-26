import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import {FaBrain} from "react-icons/fa";
import {FaCamera} from "react-icons/fa";

export const CameraCapture = (props) => {
  const [stream, setStream] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, }).then(stream => {
      setStream(stream);
      document.querySelector('video').srcObject = stream;
    });
  }, []);

  useEffect(() => {
    // Update the src of imgGlobal directly with the photo state
    var imgGlobal = document.getElementById('imagen');
    if (photo) {
      imgGlobal.src = photo;
    }
    // Assuming you want to handle the blob directly for uploads or further processing
    // No need to create an Image object here if we're just displaying the blob URL
  }, [photo]);

  function takePhoto() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    
    // Dibuja el fotograma actual del video en el canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convierte el contenido del canvas a una URL de datos y lo establece como foto
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPhoto(dataUrl);
    
    // Convierte el condenido del canvas a un blob y lo pasa al componente padre
    canvas.toBlob(function (blob) {
      props.setImage(blob);
    }, 'image/jpeg');
  }

  return (
   
    <div><p className='text-center'>
      <h1><font color="white">Tomar una fotografía</font></h1>
      <h3><font color="white">¡Trata de buscar un lugar con buena luz!</font></h3>
     
      <div class="container">
      <div class="row">
        <div class="col">
       <div class="mt-3 mb-3 ms-3 me-3">
        <video autoPlay className='responsive-video'/>
        </div>
        <canvas className='responsive-canvas'/>
       
        </div>
      </div>
      <div class="row">
      <div class="col">
      <div class="mt-3 mb-3 ms-3 me-3">
      <Button onClick={takePhoto} id="escaner"><i><FaCamera size="5em" /></i><br></br> Tomar  foto </Button> 
     </div>
      </div>
      <div class="col">
      <div class="mt-3 mb-3 ms-3 me-3">
      <Button onClick={props.predict} id="escaner" ><i><FaBrain size="5em" /></i><br></br>Analizar foto</Button>
      </div>
      
      </div>
      </div>
      </div>
      <br></br>
      <h3><font color="white">Tú fotografía: </font></h3>
      <img src="" alt="" id="imagen" width="350" height="350" class="img-fluid" ></img>
      </p>
    </div>
  );
}
