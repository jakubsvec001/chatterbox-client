var RoomsView = {
  $addRoomBtn: $("#rooms button"),
  $select: $("#rooms select"),

  /////////////////////////////////////
  //     VIEW
  /////////////////////////////////////

  render: function() {},

  renderRoom: function() {},

  /////////////////////////////////////
  //     CONTROLLER
  /////////////////////////////////////

  // on update posts or initialization, search through Messages.storage
  // add rooms to allRooms set with unique rooms that are not empty strings
  initialize: function() {
    RoomsView.$addRoomBtn.on('click', RoomsView.createRoom)
    Rooms.updateRooms();
  },

  // on inputting a new room type
  createRoom: function() {

  },
};
