const CustomError = require('./custom-error');

class BadRequestError extends CustomError {
  constructor(message) {
    this.name = 'BadRequestError';
    this.message = message;
    this.statusCode = 400;
  }
}

module.exports = BadRequestError