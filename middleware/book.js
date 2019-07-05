const CREATE_FORM_CONSTRAINS = {
    name: {
        presence: true,
        length  : {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    }
};

class BookMiddleware {
    static async createFormValidator (context, next) {
        const errors = context.validator(context.request.body, CREATE_FORM_CONSTRAINS);
        console.log(errors);
        if (errors) {
            throw context.Message.UnprocessableEntity();
        }
        await next();
    }
}

module.exports = BookMiddleware;
