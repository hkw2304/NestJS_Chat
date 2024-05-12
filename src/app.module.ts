import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway, RoomGateway } from './app.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGateway, RoomGateway], // 게이트웨이를 프로바이더로 등록, 게이트웨이는 다른 클래스에 주입해서 사용할 수 있는 프로버이더이다.
})
export class AppModule {}
