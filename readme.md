# Visual Thinking API
1. Dependencias.
2. Diseño de los componenes.
3. API.
4. Árbol del proyecto.

### 1. Dependencias.

#### Node - Proyecto
Proyecto en Node v16.13.2

Creación del proyecto con el comando  (generando el archivo package.json):

- npm init 

#### Git - Gestión de Versiones
El proyecto cuenta con gestión de versiones con Git. Creando un repositorio local y un reposotorio Remoto en GitHub.

Cada cambio en el proyecto se puede revisar en los [commits](https://github.com/AndreaCuriel/Visual_Thinking_API/commits/main).

Nota: En el proyecto tenemos .gitignore para no versionar el folder node_models.


#### Jest - Pruebas Unitarias
El proyecto tiene instalado Jest para la realización de pruebas Unitarias.

Para su instalacion y configuración, se corrieron los siguientes comandos:

- pm install jest@26.0.0 --save

Configuración en package.json para agregar el script para correr jest:

- "test": "node --experimental-vm-modules ./node_modules/jest/bin/jest"

#### Express - API
El proyeto tiene istalado express para crear la API solicitada.

Comando para instalar express en el proyecto:

- npm install express --save 

Configuración en package.json para agregar el script para correr el API:

- "server": "node ./lib/server.js"


#### Linter
Permite revisar el cógigo para darle estilo mediante reglas automatizadas.

Comando para su instalación:

- npm install eslint --save-dev

Comando para la configuracion, general el archivo .eslintrc.js en el proyecto.

- npm init @eslint/config

Agregar reglas en [.eslintrc.js](https://github.com/AndreaCuriel/Visual_Thinking_API/blob/main/.eslintrc.js) y scripts de liter en package.json.

 Scripts de linter:

![scripts-linter](https://user-images.githubusercontent.com/99285898/165803756-70125fec-2562-4bb2-a06f-41e2ebdd95e6.png)


#### GitHub Actions - Automatización de Pruebas
Dentro del proyecto se crea el archivo test.yml en la ubicación .github/workflows para automatizar las pruebas en GitHub Actions cuando se realiza un push al repositorio remoto.

[test.yml](https://github.com/AndreaCuriel/Visual_Thinking_API/blob/main/.github/workflows/test.yml)

### 2. Diseño de los componentes.
Existen tres componentes:
1. [Clase Reader.js](https://github.com/AndreaCuriel/Visual_Thinking_API/blob/main/lib/utils/Reader.js)   Ubicación: /lib/utils
2. [Clase PartnerService.js](https://github.com/AndreaCuriel/Visual_Thinking_API/blob/main/lib/services/PartnerService.js)  Ubicación: /lib/services
3. [Clase PartnerController.js](https://github.com/AndreaCuriel/Visual_Thinking_API/blob/main/lib/controllers/PartnerController.js) Ubicación: /lib/controllers

#### Reader.js
Encargada de la lectura de la data (archivo "visualpartners.json"). Mediante el método statico "readJsonFile".

#### PartnerService.js
Contiene toda la lógica de los requerimientos del cliente mediante 3 métodos estaticos.

|Requerimientos|Método estatico|Parametros|
|:-------------|:--------------|:---------|
|1.- Consultar todos los estudiantes con todos sus campos.| getAllPartners| partners (data tipo array de objetos)|
|2.- Consultar los emails de todos los estudiantes que tengan certificación haveCertification. |getPartnersEmailWthiCertification| partners, certificate (tipo Boolean)| 
|3.- Consultar todos los estudiantes que tengan credits mayor a 500. |getPartnersWithNumCredits| partners, credits (número de creditos)| 

Imagenes de los métodos 

#### PartnerController.js
Es la clase encargada de mandar a llamar la lógica con la data (importa Reader.js y PartnerService.js) , dependiento de la solicitud en la API. 
Se comunicara con la API entregado el requerimeinto requerido mediente el endpoint.

|Requerimeinto|Método estatico|Parametros| 
|:------------|:--------------|:---------|
|1|getAllPartner|Sin parametros|
|2|getPartnersEmailWthiCertification|certicate (tipo Booleam)|
|3|getPartnersWithNumCredits|credits (números de creditos)|

#### Pruebas Unitarias
Todos los métodos de las clases anterior cuentan con sus Pruebas Unitarias en el folder del proyecto llamada "test"

### 3. API
#### Consultas:

|Endpoint| URL|Respuesta|
|:--------|:----------|:----------|
| "/" | http://localhost:3000/ | Mensaje de Visual Thinking|
| "/v1/visualpartners" | http://localhost:3000/v1/visualpartners | Regresa todos los estudiantes|
| "/v1/visualpartners/emails/havecertification" | http://localhost:3000/v1/visualpartners/emails/havecertification | Regresa una lista de todos los email de los estudiantes que tienen Certificaciones|
| "/v1/visualpartners/credits/:credits"| http://localhost:3000/v1/visualpartners/credits/500 | Regresa todos los estudiantes que tengan más de 500 creditos|

#### Descripción:
La API se llama [server.js](https://github.com/AndreaCuriel/Visual_Thinking_API/blob/main/lib/server.js) en /lib.
Contiete 4 métodos GET para regresar la informacón requerida dependiendo del endpoint:
1. Regresa unicamente un mensaje.
2. Regresa todos los estudiantes, llamando el método PartnerController.getAllPartne().
3. Regresa una lista de emails de todos los estudiantes que tienen certificaciones, llamando el método ExplorerController.getPartnersEmailWthiCertification(true).
4. Regresa todos los estudiantes con creditos mayores al query param escrito en el url, llamando el método ExplorerController.getPartnersWithNumCredits(credits);

#### Ejemplos:

url: http://localhost:3000/ 

![localhost3000](https://user-images.githubusercontent.com/99285898/165807153-de2896dd-fe30-48e6-85a0-afc1a22234ad.png)

url: http://localhost:3000/v1/visualpartners

![allpartners](https://user-images.githubusercontent.com/99285898/165807784-7549dcb2-e7d9-488a-8fcd-41e59daa712e.png)

url: http://localhost:3000/v1/visualpartners/emails/havecertification

![emails](https://user-images.githubusercontent.com/99285898/165808143-0e03e4e2-360f-4e59-a99a-5d9372cfd781.png)

url: http://localhost:3000/v1/visualpartners/credits/500

![creditsNumber](https://user-images.githubusercontent.com/99285898/165808494-febdf156-dd27-4add-9f05-aca47927b6f0.png)

### 4. Árbol del proyecto.

![arbol](https://user-images.githubusercontent.com/99285898/165811372-d73b00ec-750d-492e-9051-c71e8555c10c.png)

