var MessagesView = {
  $chats: $("#chats"),

  initialize: function() {
    App.fetch(MessagesView.render);
  },

  render: function(data) {
    let posts = data.results;
    for (let message of posts) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    // debugger;
    var template = MessageView.render;
    const component = template({
      username: message.username,
      message: message.text
    });
    MessagesView.$chats.prepend(component);
  },

  updateMessages: function(){

  }
};
