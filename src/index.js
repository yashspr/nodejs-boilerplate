require('dotenv').config();
require('module-alias/register');
const config = require('@config/config');
const express = require('express');
const morgan = require('morgan');
const knex = require('knex')(config.knexConnectionConfig);
const errorHandlerMiddleware = require('@middleware/errorMiddleware');

require('@src/init/db').initKnex();

const app = express();

// Middleware
app.use(morgan('dev'));

app.knex = knex;

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('server is up');
});

app.use(errorHandlerMiddleware);
app.listen(PORT, () => {
	console.log(`[server]: started on ${PORT}`);
});
