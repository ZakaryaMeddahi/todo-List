const { CustomError, NotFoundError } = require("../errors");

const errorHandler = (err, req, res, next) => {

  const customError = {
    status: 500,
    message : "Internal Server Error"
  }

  console.log(err instanceof NotFoundError);
  if(err instanceof CustomError) {
    console.log('done');
    customError.status = err.statusCode;
    customError.message = err.message;
  }

  res.status(customError.status).json({ 
    success: false, 
    message: customError.message 
  });
}

module.exports = errorHandler