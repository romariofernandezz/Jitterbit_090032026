const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const orderRoutes = require("./routes/orderRoutes")

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/orders", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/order", orderRoutes)

app.listen(3000, () => {
    console.log("API rodando na porta 3000")
})