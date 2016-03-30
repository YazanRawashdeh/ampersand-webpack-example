const Collection = require('ampersand-rest-collection');
const Post = require('../models/post');


module.exports = Collection.extend({
    model: Post,
    url: 'http://jsonplaceholder.typicode.com/posts'
});