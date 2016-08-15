(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.loginComponent ],
      bootstrap: [ app.loginComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
