var InputView = Backbone.View.extend({

  tagName: 'input',

  events: {
    'keydown': 'handleSubmit',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  handleSubmit: function(e) {
    var isEnterKey = (e.which === 13);
    console.log(this.collection)
    if(isEnterKey) {
      this.collection.addInstagramEntry(this.$el.val());
      this.resetInput();
    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a hashtag'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});



