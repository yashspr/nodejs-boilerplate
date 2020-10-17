const errorHandlerMiddleware = function (err, req, res, next) {
	if (res.headersSent) {
		return next(err);
	}

	console.error(err.code);
	console.error(err.message);
	console.error(err.stack);
	res.status(err.status).send({ status: false, message: err.message });
};

module.exports = errorHandlerMiddleware;
