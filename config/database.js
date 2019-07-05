module.exports = {
    default: process.env.CLIENT || 'mysql',


    //TODO update configuration for specify database connection
    mysql   : {
        client    : 'mysql',
        connection: {
            host    : process.env.MYSQL_HOST || '0.0.0.0',
            user    : process.env.MYSQL_USER || 'user',
            password: process.env.MYSQL_PASSWORD || 'password',
            database: process.env.MYSQL_NAME || 'database'
        },
        pool      : {
            min: 0,
            max: 7
        }
    },
    postgres: {}
};
