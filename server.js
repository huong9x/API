require('dotenv').config();
const Koa            = require('koa');
const cors           = require('@koa/cors');
const bodyParser     = require('koa-bodyparser');
const knex           = require('knex');
const validator      = require('validate.js');
const Route          = require('./route.mapping');
const MessageMapping = require('./message.mapping');
const Message        = require('./messages');
const config         = require('./config');
(async () => {
    const app              = new Koa();
    const route            = Route();
    app.context.config     = config;
    app.context.connection = knex(config.database[config.database.default]);
    app.context.validator  = validator;
    app.context.Message    = Message;
    app
        .use(cors({origin: '*'}))
        .use(bodyParser())
        .use(MessageMapping)
        .use(route.routes())
        .use(route.allowedMethods())
        .listen(config.http.port, (err) => {
            if (err) {
                console.error(err);
            }
            console.info('Server is running on port ', config.http.port);
        })
    ;
})();
