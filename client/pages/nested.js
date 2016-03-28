const base = require('./base');
const template = require('../templates/nested.hbs');

module.exports = base.extend({
    pageTitle: 'home',
    template : template
});