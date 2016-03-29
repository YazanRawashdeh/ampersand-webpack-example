var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        id: ['number', true, 0],
        ref_id: ['number', true, 0],
        company_id: ['number', true, 0],
        name: ['string', true, ''],
        description: ['string', true, ''],
        creation_date: 'any',
        latitude: ['number', true, 0],
        longitude: ['number', true, 0],
        city: ['string', true, ''],
        country: ['string', true, '']
    }
});
