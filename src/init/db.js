const { attachPaginate } = require('knex-paginate');

function initKnex() {
	attachPaginate();
}

module.exports = {
	initKnex,
};
