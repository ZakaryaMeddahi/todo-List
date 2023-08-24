const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
  constructor(message) {
    this.name = 'NotFoundError';
    this.message = message;
    this.statusCode = 404;
  }
}

module.exports = NotFoundError