class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'CustomError';
    this.statusCode = statusCode;
  }
}

try {
  throw new CustomError('Something went wrong!', 500);
} catch (err) {
  console.error(`${err.name}: ${err.message} (Status: ${err.statusCode})`);
}
