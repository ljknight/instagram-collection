var InputView = Backbone.View.extend({

  tagName: 'div',

  template:  _.template('<form>Start date: <input type="date" class="start"></input> End date: <input type="date" class="end"></input><input type="text" class="hashtag" placeholder="Enter a hashtag"></input><input type="submit"></input></form>'),

  events: {
    'submit form': 'handleSubmit',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    this.clearInput();
    return this;
  },

  handleSubmit: function(e) {{
      // Clear collection
      this.collection.models = [];
      
      e.preventDefault();
      this.collection.addInstagramEntry($('.hashtag').val(), $('.start').val(), $('.end').val());
      this.clearInput();
    }

  },

  clearInput: function() {
    $('.hashtag').val('');
    $('.start').val('');
    $('.end').val('');
  }

});



