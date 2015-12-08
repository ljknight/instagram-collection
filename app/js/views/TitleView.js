var TitleView = Backbone.View.extend({

  id: 'title',
  
  template: _.template('<ul><li><h1>Instagram Collection</h1></li><li><a class="view-collections">View your collections</a></li><li><a class="create-collections">Create collections</a></li></ul>'),

  initialize: function() {
    this.render();
  },

  events: {
    'click .view-collections': 'viewCollections',
    'click .create-collections': 'createCollections'
  },

  viewCollections: function() {
    $('#app').html('');
    router.navigate('/collections', {trigger: true});
  },

  createCollections: function() {
    $('#app').html('');
    router.navigate('/app', {trigger: true});
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
