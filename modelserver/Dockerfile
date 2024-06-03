# Utiliza una imagen base con Miniconda instalado
FROM continuumio/miniconda3

# Establece el directorio de trabajo
WORKDIR /app

# Instalar dependencias necesarias para OpenCV
RUN apt-get update && apt-get install -y \
    libgl1-mesa-dev

# Copia el archivo de entorno de Conda y los scripts/modelos necesarios
COPY entorno.yml /app/entorno.yml
COPY modelserver.py /app/modelserver.py
COPY modeloEfNet512FInal.keras /app/modeloEfNet512FInal.keras

# Crea el entorno con Conda
RUN conda env create -f entorno.yml

# Asegúrate de que el entorno se active automáticamente
ENV PATH /opt/conda/envs/TT/bin:$PATH

# Informa a Docker que el contenedor escucha en el puerto 8000
EXPOSE 80

# El comando por defecto para ejecutar cuando se inicie el contenedor
CMD ["python", "modelserver.py"]

