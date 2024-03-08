# Usa una imagen base de Node.js versión 16.15.0
FROM node:16.15.0


# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de definición de dependencias
COPY package.json ./
COPY package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar los archivos de la aplicación al directorio de trabajo
COPY . .

# Construir la aplicación React (si es una app de producción)
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
