const express = require("express")
const router = express.Router()
const Order = require("../models/Order")

// Criar pedido
router.post("/", async (req, res) => {
    try {

        const data = req.body

        const order = new Order({
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: new Date(data.dataCriacao),
            items: data.items.map(i => ({
                productId: Number(i.idItem),
                quantity: i.quantidadeItem,
                price: i.valorItem
            }))
        })

        await order.save()

        res.status(201).json(order)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }
})

// Buscar pedido
router.get("/:id", async (req, res) => {

    try {

        const order = await Order.findOne({ orderId: req.params.id })

        if (!order) {
            return res.status(404).json({ message: "Pedido não encontrado" })
        }

        res.json(order)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

})

// Listar pedidos
router.get("/list/all", async (req, res) => {

    const orders = await Order.find()

    res.json(orders)

})

// Atualizar pedido
router.put("/:id", async (req, res) => {

    try {

        const order = await Order.findOneAndUpdate(
            { orderId: req.params.id },
            req.body,
            { new: true }
        )

        res.json(order)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

})

// Deletar pedido
router.delete("/:id", async (req, res) => {

    try {

        await Order.deleteOne({ orderId: req.params.id })

        res.json({ message: "Pedido deletado" })

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

})

module.exports = router