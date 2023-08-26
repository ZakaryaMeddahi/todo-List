const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

module.exports = NotFoundError