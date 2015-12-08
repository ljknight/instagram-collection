var SavedSearchView = Backbone.View.extend({

  className: 'saved-search',

  template: _.template('<div>#<%=hashtag%></div>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    var entry = this.template({
      hashtag: this.model.get('hashtag'),
      dateStart: this.model.get('dateStart'),
      dateEnd: this.model.get('dateEnd'),
    });

    this.$el.html(entry);

  }

});
