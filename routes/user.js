const express = require(`express`)
const app = express()

app.use(express.json())

// call userController
let userController = require("../controllers/userController")

// call middlewares
const userValidator = require("../middlewares/userValidator")
const authorization = require("../middlewares/authorization")

// endpoint get data user
app.get("/", userController.getDatauser)

// endpoint find user
app.post("/find", authorization.authorization, userController.findUser)

// endpoint add data user
app.post("/", [
    userValidator.validate,
    authorization.authorization
],userController.addDatauser)

// endpoint edit user
app.put("/:id_user", [
    userValidator.validate,
], userController.editDatauser)

// endpoint delete user
app.delete("/:id_user", authorization.authorization,userController.deleteDatauser)

app.post("/auth", userController.authentication)

module.exports = app