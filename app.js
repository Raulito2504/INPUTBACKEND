const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./src/config/config');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();

app.use(helmet());

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        const allowedOrigins = [
            config.frontendAdminUrl,
            config.frontendPublicUrl,
            config.frontendVercelUrl,
            'https://examen-segurida-crud.vercel.app'
        ].filter(Boolean);

        if (config.nodeEnv === 'development') {
            const localIpPattern = /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+)(:\d+)?$/;
            if (localIpPattern.test(origin)) {
                return callback(null, true);
            }
        }

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS not allowed'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
    res.json({
        message: 'API running',
        version: '1.0.0',
        environment: config.nodeEnv,
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.use('/api', itemRoutes);

app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.path,
        method: req.method
    });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: config.nodeEnv === 'development' ? err.message : 'Internal server error',
        ...(config.nodeEnv === 'development' && { stack: err.stack })
    });
});

module.exports = app;
