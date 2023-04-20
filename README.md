# 구조

## 1. pages
   - 핵심 파일 디렉토리
##### 라우팅
```javascript
function AboutPage() {
    console.log('About Render')
    return (
        <main>
            <h1>About Page</h1>
        </main>
    );
}
export default AboutPage;
```
Pages
   -> about.js
페이지스 디렉토리 하부의 파일명을 라우팅 주소로 자동 인식한다.


##### 링크 Link 모듈
```javascript
   import Link from "next/link";
    <Link href="/about">About</Link>
```
추가적인 요청을 하지 않고 렌더링된 페이지를 클라이언트가 연결해준다.
따라서 nextjs는 가장 빠른 클라이언트 네비게이팅과 서버사이드렌더링의 장점을 갖을 수 있다.

2. 실행

- npm run dev 
   데브서버: 수정시 자동 업데이트

- npm run build
   빌드 명령어
- npm run start
   배포용 