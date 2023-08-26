const { CustomError } = require("../errors");

const errorHandler = (err, req, res, next) => {

  const customError = {
    status: 500,
    message : "Internal Server Error"
  }
  
  if(err instanceof CustomError) {
    customError.status = err.statusCode;
    customError.message = err.message;
  }

  res.status(customError.status).json({ 
    success: false, 
    message: customError.message 
  });
}

module.exports = errorHandler