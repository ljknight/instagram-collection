var User = Backbone.Model.extend({

  defaults: {
    username: '',
  },

  urlRoot: '/api/users',

  initialize: function() {},

  saveUser: function(user) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      contentType: "application/json",
      data: JSON.stringify({username: user}),
      success: function(resp) {
        $('#signup').html('');
        var app = new AppView({
          collection: new Instagram()
        });
      }
    });
  }

});
