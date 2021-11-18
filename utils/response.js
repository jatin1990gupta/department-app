exports.successResponse = (data, message) => {
  return {
    statusCode: 200,
    message,
    payload: data,
  };
};
