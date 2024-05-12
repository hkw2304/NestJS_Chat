/* eslint-disable prettier/prettier */

import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({namespace: 'chat'}) //게이트웨이 설정
export class ChatGateway{
    @WebSocketServer() server: Server; // 웹소켓 인스턴스 생성
    
    @SubscribeMessage('message') //해당 이벤트 구독
    handleMessage(socket: Socket, data: any): void {
        const {message, nickname} = data;
        socket.broadcast.emit('message', `${nickname} : ${message}`); // 서버에서 클라로 데이터를 넘겨준다.
    }
}
@WebSocketGateway({namespace: 'room'})
export class RoomGateway{
    constructor(private readonly chatGateway: ChatGateway) {}
    rooms = [];
    @WebSocketServer() server: Server;
    @SubscribeMessage('createRoom')
    handleMessage(@MessageBody() data) {//소켓없이 데이터만 받음
        const {nickname, room} = data;
        this.chatGateway.server.emit('notice', {
            message: `${nickname}님이 ${room} 방을 만들었습니다.`,
        });
        this.rooms.push(room);
        this.server.emit('rooms', this.rooms);
    }
    @SubscribeMessage('joinRoom')
    handleJoinRoom(socket: Socket, data){
        const {nickname, room, toLeaveRoom} = data;
        socket.leave(toLeaveRoom);
        this.chatGateway.server.emit('notice', {
            message: `${nickname} 님이 ${room} 방에 입장했습니다.`,
        });
        socket.join(room);
    }
    @SubscribeMessage('message')
    handleMessageToRoom(socket: Socket, data){
        const {nickname, room, message} = data;
        console.log(data);
        socket.broadcast.to(room).emit('message', {
            message: `${nickname} : ${message}`,
        })
    }
}