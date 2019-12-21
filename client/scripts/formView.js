var FormView = {

  // creating our dom object variables
  $form: $('form'),
  $roomDropDown: $('#rooms'),

  initialize: function() {
    //click handlers
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // form functions

    // Stop the browser from submitting the form
    event.preventDefault();
    
    // get form fields
    // get username
    // get message
    //
    var username = App.username;
    var text = $("#message").text
    var roomname = Rooms.currentRoom? Rooms.currentRoom : '';

    var message = {username, message, roomname}
    // TODO: sanitize message
    parse.create(message, ()=> console.log("successfully posted message!"))

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};