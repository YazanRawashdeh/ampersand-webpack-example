const base = require('./base');
const template = require('../templates/home.hbs');

module.exports = base.extend({
    pageTitle: 'home',
    template : template
});