const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const connection = require('express-myconnection');

//Middleware para guardar la imagen en el servidor
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../imagesUploaded'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + ".jpg")
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('file')



const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

router.post('/predict', fileUpload, (req, res) => {
    // Asumiendo que `req.file.path` contiene la ruta del archivo de imagen subido
    const filePath = req.file.path;

    // Crea un objeto FormData y añade la imagen
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), {
        filename: req.file.filename
    });
// Realiza una petición POST a la API externa con la imagen
axios.post('http://20.246.191.25/predict', formData, {
    headers: {
        ...formData.getHeaders()
    },
}).then(response => {
    // Aquí manejamos la respuesta de la API externa
    const prediction = response.data.predicted_class_index + 1; // Ajusta esta línea según la estructura de la respuesta
    const date = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');
    const storagePath = req.file.filename;

    // Procede con la inserción en la base de datos
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send('server error');

        conn.query('INSERT INTO predictions SET ?', [{ prediction, date, storagePath }], (err, insertResult) => {
            if (err) {
                console.error('Error al ejecutar la consulta de inserción en savePrediction:', err);
                return res.status(500).send('Error al ejecutar la consulta de inserción');
            }

            // Obtén el último ID insertado
            conn.query('SELECT LAST_INSERT_ID() AS ID', (err, selectResult) => {
                if (err) {
                    console.error('Error al ejecutar la consulta de selección en savePrediction:', err);
                    return res.status(500).send('Error al ejecutar la consulta de selección');
                }

                const id = selectResult[0].ID;
                res.json({
                    status: response.data.status,
                    id: id,
                    prediction: response.data.predicted_class_index
                });
            });
        });
    });
}).catch(error => {
    console.error('Error al realizar la petición a la API externa:', error);
    res.status(500).send('Error al realizar la petición a la API externa');
});

   
});


router.get('/infoSpider', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send('server error');

        conn.query(`SELECT * FROM spiders WHERE idSpider = ${req.query.idSpider};`, (err, rows) => {
            if (err) {
                console.error('Error al ejecutar la consulta: en infoSpider', err);
                return;
            }
            res.send(rows[0]);
        });

    });
});


router.post('/encuesta', (req, res) => {
    const idPrediction = req.body.idPrediction;
    const surveyResult = req.body.surveyResult;

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send('server error');

        conn.query('INSERT INTO surveys set ?;', [{ idPrediction, surveyResult }], (err, rows) => {
            if (err) {
                console.error('Error al ejecutar la consulta en Encuesta:', err);
                return;
            }
            res.send("Encuesta registrada");
        })
    });
});




module.exports = router;