const base = require('./base');

const CameraView = require('../views/post');
const Collection = require('../collections/nested');

window.jQuery = window.$ =  require('jquery');
require ('../public/js/bootstrap.min.js');

module.exports = base.extend({
    template : require('../templates/nested.hbs'),
    initialize : function(){
        console.log('Hellooooo');
    },  
    events : {
        'click [data-hook~=do]' : 'doSomething'
    },  
    bindings: {
        'model.email': '[data-hook~=do]',
        'model.id' : [{
            type: 'attribute',
            hook: 'container',
            name: 'aria-labelledby'
        }],
        
        'model.postId' : {
            type: function (el, value, previousValue) {
              return "#" + value   
            },
        }
    },
    render : function(){
        console.log("this.model:",this.model);
        this.collection = new Collection();
        this.renderWithTemplate(this,this.template);
    },
    doSomething : function(e){
        this.renderCollection(this.collection, CameraView, this.queryByHook('list'));
        if (!this.collection.length) {
            this.collection.fetch();
        }
    }
});