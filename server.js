const app = require('./app');
const config = require('./src/config/config');
const { testConnection } = require('./src/config/database');

const PORT = config.port;

const startServer = async () => {
    try {
        const dbConnected = await testConnection();

        if (!dbConnected) {
            console.error('Database connection failed');
            process.exit(1);
        }

        console.log('✓ Database connected');

        app.listen(PORT, () => {
            console.log(`✓ Server running on port ${PORT}`);
            console.log(`✓ Environment: ${config.nodeEnv}`);
            console.log(`✓ CORS allowed: ${config.frontendAdminUrl}, ${config.frontendPublicUrl}`);
        });

    } catch (error) {
        console.error('Server startup failed:', error.message);
        process.exit(1);
    }
};

startServer();

process.on('SIGINT', () => {
    process.exit(0);
});

process.on('SIGTERM', () => {
    process.exit(0);
});

process.on('unhandledRejection', (reason, promise) => {
    process.exit(1);
});

process.on('uncaughtException', (error) => {
    process.exit(1);
});
