const base = require('./base');
const template = require('../templates/views/camera.hbs');

module.exports = base.extend({
    template: template,
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
