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

      var hashtag = $('.hashtag').val();

      // Remove any '#' characters
      // TODO: validate input more thoroughly - should not accept spaces or punctuation
      for (var i = 0; i < hashtag.length; i++) {
        if (hashtag[i] === '#') {
          hashtag = hashtag.slice(0,i) + hashtag.slice(i+1, hashtag.length);
        }
      }

      this.collection.addInstagramEntry(hashtag, $('.start').val(), $('.end').val());
      this.clearInput();
    }

  },

  clearInput: function() {
    $('.hashtag').val('');
    $('.start').val('');
    $('.end').val('');
  }

});



