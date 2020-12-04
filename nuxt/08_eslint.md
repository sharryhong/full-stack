## ESLint 설정

- eslint와 prettier 설치 
```
npm install --save-dev babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-vue eslint-plugin-prettier prettier
```

- .eslintrc.js 파일에 설정 추가 (https://ko.nuxtjs.org/guide/development-tools/#eslint%EC%99%80-prettier, https://eslint.org/)
- .eslintignore 파일 : 린트 적용하지 않을 경로 설정 (https://nuxtjs.org/docs/2.x/features/configuration#ignoring-files)
- package.json 
```
"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .eslintignore .",
  "lintfix": "eslint --fix --ext .js,.vue --ignore-path .eslintignore ."
}
```

#### VSCode에 ESLint 플러그인 설치 및 자동 설정 
vscode setting (command + ,키) > Eslint: Validata의 Edit in setting.json 클릭 후 autofix: true들 추가
```
 "eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    },
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    }
],
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
```
이제 저장시 자동으로 린트 적용된다. 

#### Prettier 플러그인 확인 및 설정할 때 주의 사항
prettier가 설치되어있다면, disable (workspace) 해주기 
> setting > format on save > Editor: Format On Save 끄기 (켜져있다면)  => 충돌방지 
