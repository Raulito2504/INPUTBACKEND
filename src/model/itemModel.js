const { pool } = require('../config/database');

const itemModel = {
    async getAll() {
        const result = await pool.query(
            'SELECT * FROM items ORDER BY created_at DESC'
        );
        return result.rows;
    },

    async getById(id) {
        const result = await pool.query(
            'SELECT * FROM items WHERE id = $1',
            [id]
        );
        return result.rows[0];
    },

    async create(text) {
        const result = await pool.query(
            'INSERT INTO items (text) VALUES ($1) RETURNING *',
            [text]
        );
        return result.rows[0];
    },

    async update(id, text) {
        const result = await pool.query(
            'UPDATE items SET text = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
            [text, id]
        );
        return result.rows[0];
    },

    async delete(id) {
        const result = await pool.query(
            'DELETE FROM items WHERE id = $1 RETURNING id',
            [id]
        );
        return result.rows[0];
    }
};

module.exports = itemModel;
