var Rooms = {

  currentRoom: 'random',

  allRooms: new Set(),

  updateRooms: function(){
    // call RoomsView.renderRoom on  allRooms array
    const messages = Messages.storage;
    // debugger;
    let post;
    let roomname;
    for (let postId in messages){
      post = messages[postId]
      roomname = post.roomname;
      if (roomname !== null && roomname !== undefined && roomname.length !== 0){
        Rooms.allRooms.add(post.roomname)
      }
    }
  }

};