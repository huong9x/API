const Middleware = require('./../middleware');
module.exports   = {
    prefix: '',
    routes: {
        create: {
            method  : 'POST',
            url     : '/books',
            handlers: [
                Middleware.Book.createFormValidator
            ]
        },
        update: {
            method  : 'put',
            url     : '/books/:id',
            handlers: [
                Middleware.Book.createFormValidator
            ]
        }
    }
};
