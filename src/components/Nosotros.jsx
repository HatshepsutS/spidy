import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillTelephoneFill } from "react-icons/bs";
import {FaLinkedinIn } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Nani from '../images/Nani.jpg';
import Mau from '../images/Mau.jpg';
import Adrian from '../images/Adrian.jpg';
import { Card } from 'react-bootstrap';
import { Placeholder } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, animateScroll as scroll } from "react-scroll";

export const Nosotros = () => {
  const handleClick = () => {
    Swal.fire({    
      icon: 'success',
      title: '¡Tú mensaje se ha enviado!',
      text: 'Pronto nos pondremos en contacto',
      showConfirmButton: false,
      timer: 1500
    })


  };
 
  return (
    <>
    <div>
      <h1><center><font color="white">Conoce a nuestros desarrolladores</font> </center></h1>
      <br></br><br></br>
    </div>
   
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={Mau}/>
        </div>
        <div class="team-content">
          <h3 class="name">Mauricio Beltrán</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={Nani}/>
        </div>
        <div class="team-content">
          <h3 class="name">Daniela Enriquez</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={Adrian}/>
        </div>
        <div class="team-content">
          <h3 class="name">Adrián García</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
       
  </div>
</div>

    



    <div>
    <font color="white">
    <h1 class="h1-responsive text-center my-4">¡Contáctanos!</h1>
    <p class="text-center w-responsive mx-auto mb-5">Si tienes dudas, quejas o sugerencias no dudes en dejarnos un mensaje, lo responderemos lo más rápido que podamos</p>
    </font>
    </div>

    <div className="d-flex justify-content-around">
      <Card style={{ width: '55rem', backgroundColor: "#d3d3d3"}} border='light'>
      <div class="mt-4 mb-4 ms-4 me-4 ">
      <Form>
     
      <Form.Group   className="mb-6" controlId="name">
          <Form.Label>Nombre: </Form.Label>
          <div class="opacity-50">
          <Form.Control type="text" placeholder="Tu nombre" />
          </div>
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Tu correo electrónico:</Form.Label>
          <div class="opacity-50">
          <Form.Control type="email" placeholder="name@algo.com"/>
          </div>
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje:</Form.Label>
          <div class="opacity-50">
          <Form.Control as="textarea" rows={3} />
          </div>
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="formBasicCheckbox">
    
          <Button id="escaner" size="md" type="submit" onClick={handleClick}>
          Enviar
        </Button>
        </Form.Group>
    
      </Form>
      </div>
      </Card>

      <Card style={{ width: '20rem' , backgroundColor: "#d3d3d3" }} border='light'>
      <br></br>
      <br></br>
      <div class="d-flex justify-content-around">
            <ul class="list-unstyled mb-6">
              <br></br>
                <li class="text-center"><BsPinMapFill size="3.5em" color="#e00808"/> 
                    <p>Ciudad de México, México</p>
                </li>

                <li class="text-center"><BsFillTelephoneFill size="3.5em" color="#e00808"/>
                    <p>+52 55 12 34 56 78</p>
                </li>

                <li class="text-center"><AiOutlineMail size="3.5em" color="#e00808"/>
                    <p>spydycontact@spidy.com</p>
                </li>
            </ul>
        </div>
      </Card>
    </div>
<br></br>

    </>
  )
}
