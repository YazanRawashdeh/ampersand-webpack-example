const base = require('./base');
const template = require('../templates/views/post.hbs');

module.exports = base.extend({
    template: template,
    bindings: {
        'model.title': '[data-hook~=title]',
        //'model.body': '[data-hook~=body]',
        'model.body': {
            type: 'attribute',
            hook: 'body',
            name: 'src'
        },
        // 'model.viewUrl': {
        //     type: 'attribute',
        //     hook: 'name',
        //     name: 'href'
        // }
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
