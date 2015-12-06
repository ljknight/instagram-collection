var Instagram = Backbone.Collection.extend({

  model: InstagramEntry,

  url: '/api/instagrams',

  convertToTimestamp: function(date) {
    var arr = date.toString().split('-');
    return new Date(arr[0], arr[1]-1, arr[2]).getTime()/1000;
  },

  addInstagramEntry: function(hashtag, dateStart, dateEnd) {
    
    dateStart = this.convertToTimestamp(dateStart) || 0;
    dateEnd = this.convertToTimestamp(dateEnd) || new Date().getTime()/1000;

    $.getJSON(
      'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?max_tag_id='+dateEnd+'&min_tag_id='+dateStart+'&access_token=TOKEN&callback=?',
      function(data) {
        console.log(data.data)

        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].created_time >= dateStart && data.data[i].created_time <= dateEnd) {          
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
        }
      }.bind(this)
    );
  }
});
