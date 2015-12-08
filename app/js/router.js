var Router = Backbone.Router.extend({

  initialize: function() {},

  routes : {
    "" : "signup",
    "signup": "signup",
    "app" : "app",
    "collections" : "collections"
  },

  signup: function() {
    var signupview = new SignUpView({model: new User()});
  },
  app: function() {
    var appview = new AppView({collection: new Instagram()});
  },

  collections: function() {
    var collectionview = new CollectionView({collection: new Collection()});
  }
});



