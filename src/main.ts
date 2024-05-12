import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // 반환형을 NestExpressApplication형으로 지정해 정적 메서드를 사용한다.
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // useStaticAssets : 정적 파일의 경로를 지정
  app.useStaticAssets(join(__dirname, '..', 'static'));
  await app.listen(3000);
}
bootstrap();
