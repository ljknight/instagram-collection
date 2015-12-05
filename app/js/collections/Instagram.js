var Instagram = Backbone.Collection.extend({

  model: InstagramEntry,

  url: '/api/instagrams',

  addInstagramEntry: function(hashtag, dateStart, dateEnd) {

    $.getJSON(
      'https://api.instagram.com/v1/tags/'+hashtag+'/media/recent?access_token=5420979.1677ed0.dadb612f3c2b45a1ada6b18e058193dd&callback=?',
      function(data) {
        console.log(data.data)
        for (var i = 0; i < data.data.length; i++) {
          this.create({
            hashtag: hashtag,
            username: data.data[i].user.username,
            date: data.data[i].created_time,
            contentURL: data.data[i].images.standard_resolution.url,
            permalink: data.data[i].link
            });
        }
      }.bind(this)
    );
  }
});
