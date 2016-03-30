/* this module is not used at the moment */


const Collection = require('ampersand-rest-collection');

module.exports = Collection.extend({
    ajaxConfig: function () {
        // return {
        //     headers: {
        //         'Access-Token': this.accessToken
        //     },
        //     xhrFields: {
        //         withCredentials: true
        //     }
        // };
    }
});