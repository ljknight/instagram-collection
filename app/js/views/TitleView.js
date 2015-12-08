var TitleView = Backbone.View.extend({

  el: 'div',
  
  template: _.template('<ul><li><h1>Instagram Collection</h1></li><li><h3>View your collections</h3></li></ul>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template)
    return this;
  }

});
