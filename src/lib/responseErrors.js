class HttpError extends Error {
	constructor(message, data, status) {
		super();
		this.message = message || 'Server error';
		this.status = status || 500;
		this.data = data;
	}
}

class BadRequestError extends HttpError {
	constructor(message, data) {
		super(message || 'Bad Request', data, 400);
		this.name = this.constructor.name;
	}
}

class UnAuthorizedError extends HttpError {
	constructor(message, data) {
		super(message || 'Unauthorized', data, 401);
		this.name = this.constructor.name;
	}
}

class ForbiddenError extends HttpError {
	constructor(message, data) {
		super(message || 'Forbidden', data, 403);
		this.name = this.constructor.name;
	}
}

class NotFoundError extends HttpError {
	constructor(message, data) {
		super(message || 'Not Found', data, 404);
		this.name = this.constructor.name;
	}
}

class ValidationError extends HttpError {
	constructor(message, data) {
		super(message || 'Validation Error', data, 406);
		this.name = this.constructor.name;
	}
}

class DBError extends HttpError {
	constructor(message, data) {
		super(message || 'Database Error', data, 422);
		this.name = this.constructor.name;
	}
}

class ServerError extends HttpError {
	constructor(message, data) {
		super(message || 'Internal Server Error', data, 500);
		this.name = this.constructor.name;
	}
}

module.exports = {
	HttpError,
	BadRequestError,
	UnAuthorizedError,
	ForbiddenError,
	NotFoundError,
	ValidationError,
	DBError,
	ServerError,
};
