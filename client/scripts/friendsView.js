const FriendsView = {

  initialize: function(){
    $( document ).on('click', '.username', function(e){
      FriendsView.toggleFriend(e)
    })
  },

  toggleFriend: function(e){
    const $el = $(e.target)
    const classes = $el[0].classList
    let name;
    for (let classname of classes){
      if (classname !== 'username' && classname !== 'friend'){
        name = classname;
      }
    }
    var friendEl= `.${name}`
    $( friendEl ).addClass('friend')
  }
}