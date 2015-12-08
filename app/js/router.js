var Router = Backbone.Router.extend({

  initialize: function() {},

  routes : {
    "" : "signup",
    "signup": "signup",
    "app" : "app"
  },

  signup : function() {
    var signupview = new SignUpView({model: new User()});
  },
  app : function() {
    var appview = new AppView({collection: new Instagram()});
  }
});



