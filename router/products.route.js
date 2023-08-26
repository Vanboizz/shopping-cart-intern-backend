const express = require('express');
const Products = require('../models/Products');
const router = express.Router();

// Create product
router.post('/', async (req, res) => {
    try {
        const { name, decription, price, color, image } = req.body
        const product = new Products({ name, decription, price, color, image })
        const result = await product.save()
        res.status(201).json({ data: result })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating product")
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const result = await Products.find()
        res.status(200).json({ data: result })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error querying product")
    }
});

// Get one product
router.get('/:id', async (req, res) => {
    try {
        const result = await Products.findOne({ _id: req.params.id })
        res.status(200).json({ data: result })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error querying product")
    }
});

// Update product
router.put('/:id', async (req, res) => {
    try {
        const { name, decription, price, image } = req.body
        await Products.updateOne({ _id: req.params.id }, { name, decription, price, image })
        res.status(200).send("Update successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error update product")
    }
});

// Delete product
router.delete('/:id', async (req, res) => {
    try {
        await Products.deleteOne({ _id: req.params.id })
        res.status(200).send("Delete successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error delete product")
    }
});


module.exports = router;