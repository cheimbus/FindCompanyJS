# 개인 프로젝트
## 1. 서비스 개요
- 본 서비스는 기업의 채용을 위한 웹 서비스 입니다.
- 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.
## 2. 설치 및 실행 방법
> 로컬 환경에서 개발
- 프로젝트를 clone하고 해당 프로젝트로 이동
```
git clone https://github.com/nicesiu/P_Project1.git
```
```
cd server
```
- 프로젝트에 필요한 모듈 설치
```
npm install
```
- 환경변수 설정 .env를 server폴더 내에 생성
server -> .env
```
DATABASE_USER= root
DATABASE_PASSWORS= "데이터베이스 비밀번호"
DATABASE_NAME= "데이터베이스 이름"
DATABASE_HOST= localhost
DATABASE_DIALECT= mysql
```
- 서버 실행
```
npm start
```
## 3. 사용 기술 및 도구
- node v16.15.1
- npm v7.7.6
- mysql
- sequelize

## 4. 모델 스키마
<img width="1035" height="300" alt="스크린샷 2022-07-21 오후 5 49 40" src="https://user-images.githubusercontent.com/87293880/180174458-94e35284-4e15-43a4-9f7e-34068e7c0cde.png">

## 5. 구현 목록
* 채용공고, 사용자 등록 API
* 채용공고 목록조회 API
  * 채용공고 전체조회 구현
  * 키워드를 검색하여 부분조회 구현
  * 일반 공고문에 나타나지 않는 상세페이지를 조회 구현
* 채용공고 수정 API
* 채용공고 삭제 API
* 지원자 목록 생성 API
  * 한 번만 지원하도록 구현
### 가장 신경 쓴 부분
1. REST API를 작성하고자 노력하였습니다.   
팀원이 있다고 가정하여 uri만 봐도 무엇을 하고자 예상할 수 있도록 작성하였습니다.
2. 주석을 사용하였습니다.   
변수나 함수에 대한 설명을 바로 위해 주석으로 작성하여 다른 팀원의 이해를 돕고자 작성하였습니다.
3. 코드의 가독성을 위해 일관성있게 작성하도록 노력했습니다.


