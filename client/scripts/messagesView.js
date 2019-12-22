var MessagesView = {
  $chats: $("#chats"),
  $updateButton: $(".updateButton"),

  /////////////////////////////////////
  //     VIEW
  /////////////////////////////////////
  renderMessage: function(post) {
    var template = MessageView.render;
    const component = template({
      username: post.username,
      message: post.text,
      roomname: Rooms.currentRoom,
    });
    MessagesView.$chats.append(component);
  },

  render: function(data) {
    MessagesView.$chats.empty();
    let allPosts = data.results;
    for (let post of allPosts) {
      MessagesView.renderMessage(post);
    }
  },

  /////////////////////////////////////
  //     CONTROLLER
  /////////////////////////////////////
  initialize: function(cbArray) {
    MessagesView.$updateButton.on('click', MessagesView.updateHandler)
    const cbs = function(data){
      Messages.updateMessages(data);
      Rooms.updateRooms();
      App.stopSpinner();
      FriendsView.initialize();
    }
    App.fetch(cbs);
  },

  updateHandler: function(event) {
    event.preventDefault();
    App.fetch(Messages.updateMessages);
    RoomsView.initialize();
  }

};
