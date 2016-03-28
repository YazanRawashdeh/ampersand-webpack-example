const base = require('./base');
const template = require('../templates/views/main.hbs');
const ViewSwitcher = require('ampersand-view-switcher');
const app = require('ampersand-app');
const _ = require('lodash');
const localLinks = require('local-links');

module.exports = base.extend({
    template : template,
    autoRender: true,
    initialize : function(){
        this.listenTo(app, 'page', this.handleNewPage);
    },
    events: {
        'click a[href]': 'handleLinkClick'
    },
    render:  function()  {
        this.renderWithTemplate(this);
        
        this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'), {
            show:  (newView, oldView)=> {
                document.title = _.result(newView, 'pageTitle') || 'Cloudview';
                app.currentPage = newView;
            }
        });
        
        return this;
    },
    
    handleNewPage : function(view) {
        this.pageSwitcher.set(view);
    },
    
    handleLinkClick: function (e) {
        let localPath = localLinks.pathname(e);
        
        if (localPath) {
            e.preventDefault();
            app.navigate(localPath);
        }
    }
});