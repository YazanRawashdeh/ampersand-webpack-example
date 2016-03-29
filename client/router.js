const app = require('ampersand-app');
const Router = require('ampersand-router');

const home = require('./pages/home');
const collection = require('./pages/collection');
const nested = require('./views/parent');
const Collection = require('./collections/posts');

module.exports = Router.extend ({
    routes: {
        '' : 'home',
        'collection' : 'collection',
        'nested' : 'nested',
        '(*path)': 'catchAll'
    },
    
    home : ()=> {
        console.log('Router');
        app.trigger ( 'page' , new home () );
    },
    
    collection : ()=> {
        app.trigger ( 'page' , new collection ({
            collection : new Collection()
        }) );
    },
    
    nested : ()=> {
        app.trigger ( 'page' , new nested () );
    },
    
    catchAll: function () {
        this.redirectTo('');
    }
});