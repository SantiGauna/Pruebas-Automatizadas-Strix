📌 Prueba Técnica Strix

Este proyecto contiene pruebas automatizadas con Cypress para verificar el inicio de sesión en la plataforma Strix.
Se incluyen pruebas para credenciales correctas e incorrectas.

📂 Estructura del Proyecto

📂 Prueba Tecnica Strix
│── 📂 cypress
│   ├── 📂 e2e
│   │    ├── login.cy.js       # Archivo con las pruebas
│   ├── 📂 reports
│   │    ├── 📂 html
│   │         ├── index.html  # Reporte de pruebas en formato HTML
│── 📂 node_modules 
│── 📜 cypress.config.js          # Configuración de Cypress         
│── 📜 package-lock.json               
│── 📜 package.json               # Dependencias del proyecto
│── 📜 README.md                  # Este archivo



🛠️ Instalación y Configuración

1️⃣ Clonar el repositorio o descomprimir el archivo

    git clone <URL_DEL_REPO>
    cd "Prueba Tecnica Strix" 


2️⃣ Instalar dependencias
    Asegúrate de tener Node.js instalado.
    Luego, ejecuta el siguiente comando en la raíz del proyecto:

        npm install



🚀 Ejecución de las Pruebas

1️⃣ Ejecutar pruebas en modo interactivo

    npx cypress open

Esto abrirá la interfaz de Cypress donde se pueden ejecutar las pruebas manualmente.


2️⃣ Ejecutar pruebas en modo headless y generar reporte

Ya se encuentra configurado un script en package.json para ejecutar las pruebas y generar el reporte automáticamente.

Ejecuta el siguiente comando:
    npm run html-report

Este script ejecutará Cypress en modo headed y generará el reporte HTML en:
    📂 cypress/reports/html/index.html



📊 Informe de Resultados
El reporte de pruebas generado con Mochawesome se encuentra en:

    📂 cypress/reports/html
    ├── index.html  # Reporte principal
