const ExplorerController = require("./controllers/PartnerController");
const express = require("express"); //Inicializando express
const PartnerController = require("./controllers/PartnerController");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "Visual Thinking!" });
});

app.get("/v1/visualpartners", (request, response) => {
  const visualpartners = PartnerController.getAllPartner();
  response.json(visualpartners);
});

app.get("/v1/visualpartners/emails/havecertification", (request, response) => {
  const emails = ExplorerController.getPartnersEmailWthiCertification(true);
  response.json(emails);
});

app.listen(port, () => {
  //Inicializando el server
  console.log(`Visual Thinking in localhost:${port}`);
});
