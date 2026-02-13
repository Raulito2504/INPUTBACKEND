const itemModel = require('../model/itemModel');

const sanitizeText = (text) => {
    if (!text) return text;
    return text
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#47;')
        .replace(/\\/g, '&#92;');
};

const validateText = (text) => {
    if (!text || typeof text !== 'string') {
        return { valid: false, error: 'Text field is required' };
    }

    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
        return { valid: false, error: 'Text cannot be empty' };
    }

    if (trimmedText.length > 255) {
        return { valid: false, error: 'Text must not exceed 255 characters' };
    }

    return { valid: true, text: sanitizeText(trimmedText) };
};

const itemController = {
    async getAllItems(req, res) {
        try {
            const items = await itemModel.getAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch items',
                details: error.message
            });
        }
    },

    async createItem(req, res) {
        try {
            const validation = validateText(req.body.text);

            if (!validation.valid) {
                return res.status(400).json({ error: validation.error });
            }

            const newItem = await itemModel.create(validation.text);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to create item',
                details: error.message
            });
        }
    },

    async updateItem(req, res) {
        try {
            const { id } = req.params;
            const validation = validateText(req.body.text);

            if (!validation.valid) {
                return res.status(400).json({ error: validation.error });
            }

            const updatedItem = await itemModel.update(id, validation.text);

            if (!updatedItem) {
                return res.status(404).json({ error: 'Item not found' });
            }

            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to update item',
                details: error.message
            });
        }
    },

    async deleteItem(req, res) {
        try {
            const { id } = req.params;
            const deletedItem = await itemModel.delete(id);

            if (!deletedItem) {
                return res.status(404).json({ error: 'Item not found' });
            }

            res.status(200).json({
                message: 'Item eliminado correctamente',
                id: deletedItem.id
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to delete item',
                details: error.message
            });
        }
    }
};

module.exports = itemController;
