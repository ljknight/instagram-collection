var Instagram = Backbone.Collection.extend({

  model: InstagramEntry,

  url: '/api/instagrams',

  addInstagramEntry: function(hashtag, dateStart, dateEnd) {

    // Assign arguments to variables accessible to other methods
    this.dateStart = this.convertToTimestamp(dateStart) || 0;
    this.dateEnd = this.convertToTimestamp(dateEnd) || new Date().getTime() / 1000;

    this.hashtag = hashtag;

    $.getJSON(
      // Use getJSON & add empty callback at end of URL to prevent cross-domain issues
      'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?access_token=5420979.1677ed0.dadb612f3c2b45a1ada6b18e058193dd&callback=?',
      function(data) {
        console.log(data.data)
        // Always save next page for pagination
        this.nextPage = data.pagination.next_url;

        for (var i = 0; i < data.data.length; i++) {
          // Check if hashtag is not in caption - find in comments
          if (data.data[i].caption.text.indexOf('#'+hashtag) === -1) {
            for (var j = 0; j < data.data[i].comments.data.length; j++) {
              if (data.data[i].comments.data[j].text.indexOf('#'+hashtag !== -1) && data.data[i].comments.data[j].from.username === data.data[i].user.username) {
                this.date = data.data[i].comments.data[j].created_time;
              }
            }
          } else {
            this.date = data.data[i].created_time;
          }
          // Find content within date range
          if (this.date >= this.dateStart && this.date <= this.dateEnd) {
            if (data.data[i].type === 'video') {
              this.create({
                hashtag: hashtag,
                username: data.data[i].user.username,
                date: this.date,
                contentURL: data.data[i].videos.standard_resolution.url,
                permalink: data.data[i].link
              });
            } else {
              this.create({
                hashtag: hashtag,
                username: data.data[i].user.username,
                date: this.date,
                contentURL: data.data[i].images.standard_resolution.url,
                permalink: data.data[i].link
              });
            }
          } else {
            // Super inefficient, but should work
            while (this.date > this.dateStart) {
              this.loadMore();
            }
          }
        }
      }.bind(this)
    );
  },

  loadMore: function() {
    $.getJSON(this.nextPage + '&callback=?', function(data) {
      // TODO: separate duplicate code w/ addInstagramEntry for modularity
      this.nextPage = data.pagination.next_url;
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].created_time >= this.dateStart && data.data[i].created_time <= this.dateEnd) {
          if (data.data[i].type === 'video') {
            this.create({
              hashtag: this.hashtag,
              username: data.data[i].user.username,
              date: data.data[i].created_time,
              contentURL: data.data[i].videos.standard_resolution.url,
              permalink: data.data[i].link
            });
          } else {
            this.create({
              hashtag: this.hashtag,
              username: data.data[i].user.username,
              date: data.data[i].created_time,
              contentURL: data.data[i].images.standard_resolution.url,
              permalink: data.data[i].link
            });
          }
        }
      }
    }.bind(this));
  },

  // Convert user-selected dates to timestamp
  convertToTimestamp: function(date) {
    var arr = date.toString().split('-');
    return new Date(arr[0], arr[1] - 1, arr[2]).getTime() / 1000;
  }

});
