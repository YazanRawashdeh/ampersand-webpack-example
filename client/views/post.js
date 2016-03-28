const base = require('./base');
const template = require('../templates/views/post.hbs');

module.exports = base.extend({
    template: template,
    // bindings: {
    //     'model.userId': '[data-hook~=name]',
    //     'model.id': {
    //         type: 'attribute',
    //         hook: 'avatar',
    //         name: 'src'
    //     },
    //     'model.editUrl': {
    //         type: 'attribute',
    //         hook: 'action-edit',
    //         name: 'href'
    //     },
    //     'model.viewUrl': {
    //         type: 'attribute',
    //         hook: 'name',
    //         name: 'href'
    //     }
    // },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
