const knexConnectionConfig = {
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'your_database_user',
		password: 'your_database_password',
		database: 'myapp_test',
	},
};

module.exports = {
    knexConnectionConfig
}
