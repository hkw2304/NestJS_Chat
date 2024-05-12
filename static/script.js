/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

const socket = io('http://localhost:3000/chat');
const roomSocket = io('http://localhost:3000/room');
// 전송 버튼을 클릭 시 입력된 글을 message 이벤트로 보냄
const nickname = prompt('닉네임을 입력해주세요.');
let currentRoom = '';

function createRoom(){
    const room = prompt('생성할 방의 이름을 입력해주세요.');
    roomSocket.emit('createRoom', {room, nickname});
}

socket.on('notice', (data) => {
    $('#notice').append(`<div>${data.message}</div>`);
});

roomSocket.on('message', (data) => {
    console.log(data);
    $('#chat').append(`<div>${data.message}</div>`);
})

roomSocket.on('rooms', (data) => {
    console.log(data);
    $('#rooms').empty();
    data.forEach((room) => {
        $('#rooms').append(`<li>${room} <button onclick="joinRoom('${room}')">join</button></li>`);
    });
});
s
function sendMessage(){
    if(currentRoom === ''){
        alert('방을 선택해주세요.');
        return;
    }
 
    const message = $('#message').val();
    const data = {message, nickname, room: currentRoom};
    $('#chat').append(`<div>나 : ${message}</div>`);
    roomSocket.emit('message', data);
    return false;
}
socket.on('connect', () =>{
    console.log('connected');
});
socket.on('message', (message) =>{ //서버 쪽으로 message라는 이벤트로 데이터를 받는다.
    // eslint-disable-next-line no-undef
    $('#chat').append(`<div>${message}</div>`);
});

function joinRoom(room){
    roomSocket.emit('joinRoom', {room, nickname, toLeaveRoom: currentRoom});
    $('#chat').html(''); //채팅방 이동 시 기존 메시지 삭제
    currentRoom = room;
}