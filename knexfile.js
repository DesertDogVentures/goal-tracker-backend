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
    staging: {
        client: 'postgresql',
        connection: {
            database: 'dcr5ahddkgtq2n',
            host: 'ec2-54-225-150-216.compute-1.amazonaws.com',
            user: 'evhbdhmifqmgoh',
            password: 'eb2d3d4c3f49986f466515e5652ced654886ffb243d212a08dcd0659cd75f460'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'dcr5ahddkgtq2n',
            host: 'ec2-54-225-150-216.compute-1.amazonaws.com',
            user: 'evhbdhmifqmgoh',
            password: 'eb2d3d4c3f49986f466515e5652ced654886ffb243d212a08dcd0659cd75f460'
        }
    }
};