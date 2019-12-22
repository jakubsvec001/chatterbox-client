var Messages = {

  // single source of truth
  storage: {},

  displayed: {results: []},

  updateMessages: function(data) {
    //take data and put in storage
    for (let post of data.results) {
      var id = post.objectId;
      Messages.storage[id] = post;
    }
    //call on MessagesView.render on message data in storage
    for (let key in Messages.storage) {
      Messages.displayed.results.push(Messages.storage[key]);
    }

    MessagesView.render(Messages.displayed);
  }

};

/* createdAt: "2019-12-20T20:26:33.354Z"
objectId: "3BWv5YOxsN"
roomname: "Lunch"
text: "meow"
updatedAt: "2019-12-20T20:26:33.354Z"
username: "kyle" */