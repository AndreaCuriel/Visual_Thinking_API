## Dependencias.

### Node - Proyecto
Proyecto en Node v16.13.2
Creación del proyecto con el comando:
npm init 

## Git - Gestión de Versioens.
El proyecto cuenta con gestión de versiones con Git. Creando un repositorio local y un reposotorio Remoto en GitHub.
Cada cambio en el proyecto se puede revisar en los commits.


### Jest - Pruebas Unitarias
El proyecto tiene instalado Jest para la realización de pruebas Unitarias.
Para su instalacion y configuración, se corrieron los siguientes comandos:

npm install jest@26.0.0 --save

Configuracion en package.json para agregar el script para correr jest:

"test": "node --experimental-vm-modules ./node_modules/jest/bin/jest"

### Express - API
El proyeto tiene istalado express para crear la API solicitada.
Comando para instalar express en el proyecto:

npm install express --save 

### Linter
Permite revisar el cógigo para darle estilo mediante reglas automaticamente.
Comando para su instalación:
npm install eslint --save-dev
Comando para la configuracion, general el archivo .eslintrc.js en el proyecto.
npm init @eslint/config

Agregar Reglas en .eslintrc.js:


Agregar scripts de linter en el package.json:

## GitHub Actions - Automatización de Pruebas
Dentro del proyecto se crea el archivo test.yml en la ubicación .github/workfloes para automatizar las pruebas en GitHub Actions cuando se realiza un psuh al repositorio remoto.

test.yml
Imagen


## Diseño de los componentes.
Existen tres componentes:
1. Clase Reader.js   Ubicación: /lib/utils
2. Clase PartnerService.js  Ubicación: /lib/services
3. Clase PartnerController.js Ubicación: /lib/controllers

### Reader.js
Encargada de la lectura de la data (archivo "visualpartners.json"). Mediante el método statico "readJsonFile".

Imagen de codigo 

### PartnerService.js
Contiene toda la lógica de los requerimientos del cliente mediante 3 métodos estaticos.

|Requerimientos|Método estatico|Parametros|
|:-------------|:--------------|:---------|
|1.- Consultar todos los estudiantes con todos sus campos.| getAllPartners| partners (data tipo array de objetos)|
|2.- Consultar los emails de todos los estudiantes que tengan certificación haveCertification. |getPartnersEmailWthiCertification| partners, certificate (tipo Boolean)| 
|3.- Consultar todos los estudiantes que tengan credits mayor a 500. |getPartnersWithNumCredits| partners, credits (número de creditos)| 

Imagenes de los métodos 

### PartnerController.js
Es la clase encargada de mandar a llamar la lógica con la data (importa Reader.js y PartnerService.js) , dependiento de la solicitud en la API. 
Se comunicara con la API entregado el requerimeinto requerido mediente el endpoint.

|Requerimeinto|Método estatico|Parametros| 
|:------------|:--------------|:---------|
|1|getAllPartner|Sin parametros|
|2|getPartnersEmailWthiCertification|certicate (tipo Booleam)|
|3|getPartnersWithNumCredits|credits (números de creditos)|

## Pruebas Unitarias
Todos los métodos de las clases anterior cuentan con sus Pruebas Unitarias en el folder del proyecto llamada "test"

## API
### Consultas:

|Endpoint| URL|Respuesta|
|:--------|:----------|:----------|
| "/" | http://localhost:3000/ | mensaje de Visual Thinking|
| "/v1/visualpartners" | http://localhost:3000/v1/visualpartners | Regresa todos los estudiantes|
| "/v1/visualpartners/emails/havecertification" | http://localhost:3000/v1/visualpartners/emails/havecertification | Regresa una lista de todos los email de los estudiantes que tienen Certificaciones|
| "/v1/visualpartners/credits/:credits"| http://localhost:3000/v1/visualpartners/credits/500 | Regresa todos los estudiantes que tengan más de 500 creditos|

### Descripción:
La API se llama server.js en /lib.
Contiete 4 métodos GET para regresar la informacón requerida dependiendo del endpoint:
1. Regresa unicamente un mensaje.
2. Regresa todos los estudiantes, llamando el método PartnerController.getAllPartne().
3. Regresa una lista de emails de todos los estudiantes que tienen certificaciones, llamando el método ExplorerController.getPartnersEmailWthiCertification(true).
4. Regresa todos los estudiantes con creditos mayores al query param escrito en el url, llamando el método ExplorerController.getPartnersWithNumCredits(credits);

### Ejemplos:
