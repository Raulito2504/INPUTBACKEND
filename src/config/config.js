require('dotenv').config();

const config = {
    port: process.env.PORT || 4000,
    nodeEnv: process.env.NODE_ENV || 'development',
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT,
        ssl: process.env.DB_SSL === 'true'
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    },
    superAdminSecret: process.env.SUPER_ADMIN_SECRET,
    allowSuperAdminCreation: process.env.ALLOW_SUPER_ADMIN_CREATION === 'true',
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880,
    allowedFileTypes: process.env.ALLOWED_FILE_TYPES?.split(',') || [],
    frontendAdminUrl: process.env.FRONTEND_ADMIN_URL,
    frontendPublicUrl: process.env.FRONTEND_PUBLIC_URL,
    frontendVercelUrl: process.env.FRONTEND_VERCEL_URL,
    backendUrl: process.env.BACKEND_URL
};

module.exports = config;
