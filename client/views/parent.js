const base = require('./base');
const template = require('../templates/parent.hbs');

const CollapseView = require('../pages/nested');
const Collection = require('../collections/parent');

module.exports = base.extend({
    template : template,
    autoRender : true,
    binding : {
        
    },
    render : function(){
        this.collection = new Collection();
        this.renderWithTemplate(this);
        this.doSomething();
    },
    doSomething : function(){
        this.renderCollection(this.collection, CollapseView, this.queryByHook('accordion'));
        if (!this.collection.length) {
            this.collection.fetch();
        }
    }
});