const base = require('./base');
const template = require('../templates/nested.hbs');

const CameraView = require('../views/post');
const Collection = require('../collections/nested');

window.jQuery = window.$ =  require('jquery');
require ('../public/js/bootstrap.min.js');

module.exports = base.extend({
    // collection : new Collection,
    pageTitle: 'home',
    template : template,
    events : {
        'click [data-hook~=do]' : 'doSomething'
    },  
    render : function(){
        this.collection = new Collection();
        this.renderWithTemplate(this);
    },
    doSomething : function(e){
        console.log(this.collection);
        this.renderCollection(this.collection, CameraView, this.queryByHook('list'));
        if (!this.collection.length) {
            this.collection.fetch();
        }
    }
});