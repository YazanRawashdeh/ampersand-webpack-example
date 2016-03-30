var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: ['number', true, 0],
        postId: ['number', true, 0],
        name: ['string', true, ''],
        email: ['string', true, ''],
        body: ['string', true, '']
    }
});