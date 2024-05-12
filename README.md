<h3>채팅을 만들려면 채팅방도 만들어야 하고, 접속한 유저 모두에게 메시지를 발송하는 브로드 캐스팅 기능도 필요하고 여러 기능들이 필요하다.</h3>

<span>socket.io는 웹소켓을 기반으로 서버와 클라이언트의 양방향 통신을 지원하는 라이브러리이다.</span>

<h4>작업 순서</h4>
<ol>
  <li>프로젝트 생성 및 패키지 설치</li>
  <li>정적 파일 서비스를 위한 main.ts설정</li>
  <li>socket.io 서버 구동을 위한 게이트웨이 만들기</li>
  <li>클라이언트 측 코드 작성</li>
  <li>테스트</li>
</ol>
<hr>

<h4>1. 패키지 설치하기</h4>
<b>@nestjs/websockets</b> : 클라이언트와 서버를 연결하고 양방향 통신 또는 데이터 전송이 가능하게 해주는 패키지
<br>
<b>@nestjs/platform-socket.io</b> : 웹소켓의 성능향상이나, 실시간 데이터 동기화 같은 웹소켓 프로토콜 기반의 프로그램 작성시 필수인 패키지
<br><br>
<h4>2. 정적 파일 서비스 설정</h4>

![정적파일서비스](https://github.com/hkw2304/NestJS_Chat/assets/111471255/c418a04a-5499-433a-8f81-23ddf82c16b1)

<h4>3. 서버 측 작업을 위한 게이트웨이 만들기</h4>

NestJS에서 웹소켓을 이용한 통신을 받아주는 클래스를 게이트웨이라한다.

![게이트웨이 만들기](https://github.com/hkw2304/NestJS_Chat/assets/111471255/ce451f9f-8e0a-457a-a55c-d4e34934f26b)

<h4>4. 클라이언트 측 index.html 작성</h4>

![인덱스](https://github.com/hkw2304/NestJS_Chat/assets/111471255/7beb4230-102a-4480-9c19-70ae3af2f933)

<h5>5. 테스트</h5>







