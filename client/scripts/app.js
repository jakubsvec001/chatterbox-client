var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    App.startSpinner();
    MessagesView.initialize();

    // Fetch initial batch of messages
    // App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // move items to messages, update messages as necessary
      // App.updateMessages(data);
      // App.updateRooms(data);
      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function(data) {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  andAnother: function(){

  }
};
