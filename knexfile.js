module.exports = {

    development: {
        client: 'pg',
        connection: {
            database: process.env.GOAL_TRACKER_DB || 'goal-tracker',
            host: process.env.GOAL_TRACKER_HOST || '127.0.0.1',
            user: process.env.GOAL_TRACKER_USER || '',
            password: process.env.GOAL_TRACKER_PASSWORD || '',
        }
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
    }
};