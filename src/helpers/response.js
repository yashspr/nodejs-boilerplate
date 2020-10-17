function sendResponse(res, data, statusCode = 200, apiVersion) {
	let obj = {
		status: true,
		apiVersion: apiVersion || 'No Version',
		statusCode,
		data,
	};
	return res.status(statusCode).json(obj);
}

module.exports = {
	sendResponse,
};
