var Collection = Backbone.Collection.extend({

  model: SavedSearch,

  url: '/api/collections',

  getCollections: function() {
    $.ajax({
      type: "GET",
      url: "/api/collections/"+window.localStorage.insta+"",
      contentType: "application/json",
      success: function(resp) {
        console.log(resp)
      }
    });
  }

});
