const base = require('./base');
// const template = require('../templates/nested.hbs');

const CollapseView = require('../pages/nested');
const Collection = require('../collections/parent');

module.exports = base.extend({
    template : "<p data-hook='hiii'></p>",
    // events : {
    //     'click [data-hook~=do]' : 'doSomething'
    // },  
    initialize : function(){
        this.collection = new Collection();
        this.renderWithTemplate();
    },
    doSomething : function(e){
        this.renderCollection(this.collection, CollapseView, this.queryByHook('hiii'));
        if (!this.collection.length) {
            this.collection.fetch();
        }
    }
});