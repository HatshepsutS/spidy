from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
import tensorflow_hub as hub
import cv2

# Definir los nombres de las clases basándose en los géneros de arácnidos y escorpiones que proporcionaste
class_names = [
    'Argiope', 'Brachypelma', 'Centruroides', 'Habronattus',
    'Latrodectus', 'Loxosceles', 'Peucetia', 'Physocyclus', 'Vaejovis'
]

# Cargar el modelo personalizado, asegurándote de incluir los objetos personalizados necesarios para TensorFlow Hub
custom_objects = {'KerasLayer': hub.KerasLayer}
model = load_model('modeloEfNet512FInal.keras', custom_objects=custom_objects)

app = Flask(__name__)

@app.route('/')
def index():
    # Servir la página HTML estática
    return app.send_static_file('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        # Convertir el archivo cargado en una imagen PIL y redimensionarla
        img = Image.open(file.stream)

        img = np.array(img).astype(float)/255

        img = cv2.resize(img, (512,512))
       
        # image = image.resize((512, 512))
        # image_array = np.asarray(image)
        # image_array = np.expand_dims(image_array, axis=0)
        
        # Imprimir el array de la imagen para depuración
        # print("Image array shape:", image_array.shape)
        
        # Realizar la predicción
        print("Realizando predicción...")
        prediction = model.predict(img.reshape(-1, 512, 512, 3))[0]
        # prediction = model.predict(image_array)[0]  # Asume que el modelo devuelve un batch de predicciones
        print("Predicción completada.")
        
        # Crear un diccionario que asocie cada nombre de clase con su probabilidad
        prediction_dict = {class_names[i]: float(prediction[i]) for i in range(len(class_names))}
        
        # Ordenar el diccionario por probabilidades en orden descendente
        sorted_predictions = dict(sorted(prediction_dict.items(), key=lambda item: item[1], reverse=True))
        
        # Imprimir la predicción ordenada para depuración
        print("Predicciones ordenadas:", sorted_predictions)
        
        # Devuelve el diccionario ordenado como parte de la respuesta JSON
        predicted_class_index = np.argmax(prediction)
        predicted_class_name = class_names[predicted_class_index]
        predicted_class_probability = prediction[predicted_class_index]
        
        # Devolver el nombre de la clase y la probabilidad asociada
        return jsonify({
            'predicted_class_index': int(predicted_class_index), 
            'predicted_class': predicted_class_name,
            'probability': float(predicted_class_probability)
        })

if __name__ == '__main__':
    print("Modelo cargado. Escuchando en el puerto 8000...")
    app.run(debug=True, port=8000)
