const express = require("express")
const mongoose = require("mongoose")
const orderRoutes = require("./routes/orderRoutes")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/orders")  //MongDB local rodando na porta 27017, banco de dados "orders"
.then(() => {
    console.log("MongoDB conectado")
})
.catch(err => {
    console.log("Erro MongoDB:", err)
})

app.use("/order", orderRoutes)

app.listen(3000, () => {
    console.log("API rodando na porta 3000")
})