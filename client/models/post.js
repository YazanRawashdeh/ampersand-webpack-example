var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        userId: 'any',
        id: ['number', true, 0],
        title: ['string', true, ''],
        body: ['string', true, '']
    },
    session: {
        selected: ['boolean', true, false]
    },
    // derived: {
    //     fullName: {
    //         deps: ['firstName', 'lastName'],
    //         fn: function () {
    //             return this.firstName + ' ' + this.lastName;
    //         }
    //     },
    //     avatar: {
    //         deps: ['firstName', 'lastName'],
    //         fn: function () {
    //             return 'http://robohash.org/' + encodeURIComponent(this.fullName) + '?size=80x80';
    //         }
    //     },
    //     editUrl: {
    //         deps: ['id'],
    //         fn: function () {
    //             return '/person/' + this.id + '/edit';
    //         }
    //     },
    //     viewUrl: {
    //         deps: ['id'],
    //         fn: function () {
    //             return '/person/' + this.id;
    //         }
    //     }
    // }
});
