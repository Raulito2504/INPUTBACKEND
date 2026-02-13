-- Crear tabla items
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Insertar datos de ejemplo (opcional)
INSERT INTO items (text)
VALUES ('admin'),
    ('usuarioDeinido');