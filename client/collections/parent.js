const Collection = require('ampersand-rest-collection');
const Comment = require('../models/comment');


module.exports = Collection.extend({
    model: Comment,
    url: 'http://jsonplaceholder.typicode.com/posts/1/comments'
});
