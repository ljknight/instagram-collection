var EntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<div>#<%=hashtag%> | @<%=username%></div><a href="<%=permalink%>"><img src="<%=contentURL%>"></img></a>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {

    var entry = this.template({
      hashtag: this.model.get('hashtag'),
      username: this.model.get('username'),
      contentURL: this.model.get('contentURL'),
      permalink: this.model.get('permalink'),
    });

    this.$el.html(entry);

  }

});
