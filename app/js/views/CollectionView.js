var CollectionView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView();

    this.collection.getCollections();

    this.render();
  },

  render: function() {

    this.$el.append([
      this.title.$el,
    ]);

    return this;
  }

});
