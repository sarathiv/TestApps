(function(app) {
  app.loginComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<H1> Sample App </H1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
