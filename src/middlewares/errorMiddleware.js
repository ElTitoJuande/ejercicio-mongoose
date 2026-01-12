const errorHandler = (error, _req, res, _next) => {
  // el status code se establece en 500 si no se ha establecido previamente
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
  });
};

export default errorHandler;
