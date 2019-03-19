******************************************
## Vue.js Tips
프로젝트 진행 중 작은 팁들 모음
******************************************

### [Vue CLI 3.x로 작성한 코드를 IE11에서 작동하도록 설정하기](https://steemit.com/vue-cli3/@stepanowon/vue-cli-3-x-ie11)

### scss/sass 변수를 모은 파일을 모든 곳에서 사용하기
- 적용 파일 : vue.config.js

```
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/style/_variable.scss";
        `,
      },
    },
  },
};
```
> @는 src폴더 경로를 말하며, 각 vue파일에서 import abc from '@/views/components/abc'; 이렇게 사용하면 편하다.
