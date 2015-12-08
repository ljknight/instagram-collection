var SavedSearchView = Backbone.View.extend({

  className: 'saved-search',

  template: _.template('<div><a href="/#app" data-hash="<%=hashtag%>" data-start="<%=dateStart%>" data-end="<%=dateEnd%>">#<%=hashtag%></a></div>'),

  initialize: function() {
    this.render();
  },

  events: {
    "click a": "openCollection"
  },

  openCollection: function(e) {
    var hashtag = $(e.currentTarget).data("hash");
    var start = function() {
      if ($(e.currentTarget).data("start") === 0) {
        return 0;
      } else {
        var newDate = new Date($(e.currentTarget).data("start")*1000);
        var year = newDate.getFullYear();
        var month = newDate.getMonth();
        var date = newDate.getDate();

        return year + '-' + month + '-' + date;
      }
    }();
   
   var end = function() {
      var newDate = new Date($(e.currentTarget).data("end")*1000);
      var year = newDate.getFullYear();
      var month = newDate.getMonth();
      var date = newDate.getDate();

      return year + '-' + month + '-' + date;      
    }();

    console.log(hashtag, start, end)

    // TODO: pass these arguments to instagram collection
    // this.collection.addInstagramEntry(hashtag, start, end);

    window.addInstagramEntry(hashtag, start, end);
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
