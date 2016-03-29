const app = require('ampersand-app');
const Router = require('./router');

const MainView = require('./views/main');
const HomeModel = require('./models/home');
window.app = app;
app.extend({
    router  : new Router(),
    init : function() {
        console.log("AAAAAA");
        
        this.mainView = new MainView({
            model: new HomeModel(),
            el: document.body
        });
        
        this.router.history.start({ pushState: false });   
    },
    
    navigate: function(page) {
        console.log('PAGE ' , page);
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {
            trigger: true
        });
    }
});


app.init();