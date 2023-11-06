// categoryRoutes.js
const express = require('express');
const router = express.Router();
const { Category } = require('../models'); // adjust the path to where your models are actually located

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get one category by its ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Create a new category
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Update an existing category by its ID
router.put('/:id', async (req, res) => {
    try {
        const updated = await Category.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCategory = await Category.findByPk(req.params.id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete a category by its ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Category.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send('Category deleted');
        } else {
            res.status(404).send('Category not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
