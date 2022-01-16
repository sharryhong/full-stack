## ViewFold 플러그인

- 개발 목적 : 아는분의 코드리뷰를 하던 중 플러그인으로 만들면 좋을 것 같아서 만들어 보았습니다.
- 작업 환경 : ie 10~, jQuery 사용
- 기능 : option foldLine: 5 인 경우, 5줄 넘으면 '더보기' 버튼나오고 ... 말줄임 표시.
  더보기 버튼 클릭시 모든 내용 나오며 '접기' 버튼으로 변경

```
$(".view-detail").viewFold({
  foldLine: 5
});
```

참고 자료

- 책 자바스크립트 + jQuery 완전정복 스터디 3권
- 자바스크립트 객체지향 프로그래밍 : https://poiemaweb.com/js-object-oriented-programming
- jquery 플러그인 만드는 방법 : https://learn.jquery.com/plugins/basic-plugin-creation/ , https://offbyone.tistory.com/129
