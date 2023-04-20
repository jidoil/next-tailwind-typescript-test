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
![스크린샷 2023-04-20 162711.png](..%2F..%2FPictures%2FScreenshots%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-04-20%20162711.png)


##### 링크 Link 모듈
```javascript
   import Link from "next/link";
    <Link href="/about">About</Link>
```



2. 실행

- npm run dev 
   데브서버: 수정시 자동 업데이트

- npm run build
   빌드 명령어
- npm run start
   배포용 