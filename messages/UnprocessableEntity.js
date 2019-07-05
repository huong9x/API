const MessageError = require('./Message.Error');

class UnprocessableEntity extends MessageError {

    constructor (message) {

    }

    get status () {
        return 422;
    }

    get response () {
        return super.response;
    }
}
