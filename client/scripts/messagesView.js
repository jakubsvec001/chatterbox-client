var MessagesView = {
  $chats: $("#chats"),
  $updateButton: $(".updateButton"),

  /////////////////////////////////////
  //     VIEW
  /////////////////////////////////////
  renderMessage: function(post) {
    // debugger;
    var template = MessageView.render;
    const component = template({
      username: post.username,
      message: post.text
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
  initialize: function() {
    App.fetch(Messages.updateMessages);
    MessagesView.$updateButton.on('click', MessagesView.updateHandler)
  },

  updateHandler: function(event) {
    event.preventDefault();
    App.fetch(Messages.updateMessages);
  }

};
