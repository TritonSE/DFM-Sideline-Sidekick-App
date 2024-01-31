class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class InternalError extends CustomError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

export { CustomError, InternalError };
