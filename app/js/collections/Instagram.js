var Instagram = Backbone.Collection.extend({

  model: InstagramEntry,

  url: '/api/instagrams',

  addInstagramEntry: function(hashtag, dateStart, dateEnd) {

    $.getJSON(
      'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?max_timestamp=1367432682&min_timestamp=1364840682?access_token=TOKEN&callback=?',
      function(data) {
        console.log(data.data)
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].type === 'video') {
            this.create({
              hashtag: hashtag,
              username: data.data[i].user.username,
              date: data.data[i].created_time,
              contentURL: data.data[i].videos.standard_resolution.url,
              permalink: data.data[i].link
            });
          } else {
            this.create({
              hashtag: hashtag,
              username: data.data[i].user.username,
              date: data.data[i].created_time,
              contentURL: data.data[i].images.standard_resolution.url,
              permalink: data.data[i].link
            });
          }
        }
      }.bind(this)
    );
  }
});
