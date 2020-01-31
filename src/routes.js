const { Router } = require("express");
const BoletoController = require('./controllers/BoletoController');
const routes = Router();

routes.get("/", (request, response) => {
  response.status(200).send({
    title: "EWally Test - Italo Siqueira",
    version: "0.0.0"
  });
});

routes.post('/boleto', BoletoController.store);

module.exports = routes;
