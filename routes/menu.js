const express = require(`express`)
const app = express()

app.use(express.json())

// call menuController
let menuController = require("../controllers/menuController")

// call Middleware
let authorization = require("../middlewares/authorization")
let uploadImage = require("../middlewares/uploadImage")

// endpoint get data menu
app.get("/", 
    menuController.getDataMenu)

// endpoint add data menu
app.post("/", 
    uploadImage.upload.single(`image`),
    menuController.addDataMenu)

// endpoint edit menu
app.put("/:id_menu", [
    uploadImage.upload.single(`image`),
],
    menuController.editDataMenu)

// endpoint delete menu
app.delete("/:id_menu", 
    menuController.deleteDataMenu)

module.exports = app