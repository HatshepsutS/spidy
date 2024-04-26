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
        img = Image.open(file.stream).convert('RGB')
        img = np.array(img).astype(float)/255
        img = cv2.resize(img, (512,512))
       
        print("Realizando predicción...")
        prediction = model.predict(img.reshape(-1, 512, 512, 3))[0]
        
        # Crear un diccionario que asocie cada nombre de clase con su probabilidad
        prediction_dict = {class_names[i]: float(prediction[i]) for i in range(len(class_names))}
        
        # Ordenar el diccionario por probabilidades en orden descendente
        sorted_predictions = dict(sorted(prediction_dict.items(), key=lambda item: item[1], reverse=True))

        print("Predicciones ordenadas:", sorted_predictions)
        
        # Devuelve el diccionario ordenado como parte de la respuesta JSON
        predicted_class_index = np.argmax(prediction)
        predicted_class_name = class_names[predicted_class_index]
        predicted_class_probability = prediction[predicted_class_index]
        
        if predicted_class_probability < 0.90:
            # Si la probabilidad es menor a 0.90, considerar la predicción como inconclusa
            return jsonify({
                'status': 'inconclusive',
                'predicted_class_index': int(predicted_class_index), 
                'predicted_class': predicted_class_name,
                'probability': float(predicted_class_probability)
            })
        
        # Devolver el nombre de la clase y la probabilidad asociada si es >= 0.90
        return jsonify({
            'status': 'success',
            'predicted_class_index': int(predicted_class_index), 
            'predicted_class': predicted_class_name,
            'probability': float(predicted_class_probability)
        })

if __name__ == '__main__':
    print("Modelo cargado. Escuchando en el puerto 8000...")
    app.run(debug=True, port=8000)
