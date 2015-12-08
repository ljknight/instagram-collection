var EntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<div>#<%=hashtag%> | @<%=username%> | <%=date%> </div><a href="<%=permalink%>"><img src="<%=contentURL%>"></img></a>'),

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
      date: new Date(this.model.get('date')*1000)
    });

    this.$el.html(entry);

  }

});
