const routes = require("express").Router()
const PracController = require("../controller/Prac1Controller");

routes.post("/prac",PracController.add)
module.exports=routes