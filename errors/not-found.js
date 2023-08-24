
class NotFoudError extends Error {
  constructor(message) {
    this.name = 'NotFoudError';
    this.message = message;
    this.statusCode = 404;
  }
}

module.exports = NotFoudError