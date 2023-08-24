
class CustomError extends Error {
  constructor(message) {
    this.name = 'CustomError';
    this.message = message;
  }
}

module.exports = CustomError