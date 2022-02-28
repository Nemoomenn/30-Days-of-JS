// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

// add new chat
newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message).then(() => {
    newChatForm.reset();
  }).catch((err) => console.log(err));
});

// update username
newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();

  updateMssg.innerText = `Your name was updated to ${newName}`;
  // eslint-disable-next-line no-return-assign
  setTimeout(() => updateMssg.innerText = '', 3000);
});

// update the chat room
rooms.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // pass
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : 'annon';
// class instances
// eslint-disable-next-line no-undef
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);

chatroom.getChats((data) => {
  chatUI.render(data);
});
