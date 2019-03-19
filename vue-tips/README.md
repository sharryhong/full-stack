## Vue.js Tips
- 프로젝트 진행하면서 작은 팁들 모음

#### scss/sass를 사용할때 변수를 모은 파일을 모든 곳에서 사용하고 싶다.
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
> @는 src폴더 경로를 말하며, 각 vue파일에서 import fileName from '@/views/components/fileName'; 이렇게 사용하면 편하다.
