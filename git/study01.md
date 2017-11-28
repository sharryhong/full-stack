# GIT STUDY 01

- commit : 의미있는 작업의 단위
  - 작업자, 시간, log 등을 통해 어떤 것이 변경되었는지 알 수 있다.
- 회사에서는 gitlab을 많이 쓴다. 내 서버에 설치할 수 있어 비공개 저장소로 사용한다.
- github는 오픈소스용으로 많이 쓴다.

## 특징
- 오픈소스. 무료임
- io. 블로그 기능 제공
- 공유문화 : pull request. 제안, 버그체크 등을 할 수 있다. 원거리 개발자들끼리 소통가능
- Branch : 브랜치 활용시 효율적. 3주차 때 진행 예정
- **분산 관리 시스템** : 거의 모든 동작을 local에서 수행한다.(commit을 local에서 한다.)
  - svn의 경우 중앙관리시스템으로서 서버가 다운되면 아무것도 할 수 없다.
- log : 보안관련 해시 태그(SHA1)를 사용하여 생성. 40자 16진수 문자열인데 앞의 7자만 적어도 된다.
- 변동사항만 저장한다. **성능**, 용량 위해. 점선표시는 변경사항이 없어서 이전 상태 파일에 대한 링크만 저장한다.

- mac : [iterm2 테마 설치](https://www.iterm2.com/)하면 터미널에서 더 보기 좋음

## 사용자 정보 설정
```
$git config --global user.name mygitname
$git config --global user.email myemail@gmail.com
```

## git 저장소 만들기
- 방법1) $git init : remote 저장소에 대한 주소 정보가 없다.
- 방법2) github사이트에서 만들고 `$git clone 경로` : 훨씬 많이 쓴다. 주소 정보가 있다.
```
$git remote -v 로 경로를 확인할 수 있다.
```

- init으로 했을 때는 아래와 같이 작업을 해줘야 한다. 그냥 git clone하자.
```
$git remote add origin 경로
```

## 파일 lifecycle (생존주기)
- working derectory : 물리적인 파일이 저장되는 공간
- staging area : add했을 때 (commit되기 전에 거쳐가는 임시 공간. index라고도 한다. .git폴더 내에 있다.)
- repository : git에 관련된 모든 정보들이 저장되는 공간(.git)

- 속해 있는 폴더 열기 : window `$start .` mac `$open .`
- 바뀐 상황 확인 : `$git status` - 항상 하는 습관
  - untracked file : 저장소에 한번도 저장되지 않았던 파일
  - unmodified : commit된 파일이 수정된 내용이 없는 상태
  - 녹색 : commit할 준비가 되어있다.

- `$git add 파일명` : commit할 준비를 하였다.
- `$git commit -m '메시지'` : commit 하였다. log생성. add하지 않은 파일은 커밋되지 않는다.

- git add 한뒤 git commit만 하고 엔터치면?
esc 한번 누르고 ->
shift + : 누르면 커서가 아래로 생긴다.
q + enter 누르면 빠져나온다.
=> 커밋 메시지가 없어서.. 이럴 땐 i(insert)누르고 커밋 메시지 치고 shift + : 누르고 wq(저장하고 나오기)
- 커밋 메시지는 항상 의미있게 작성해야 한다.

## 명령어
#### `git status -s`
 - 녹색 A : add된 상태 파일
 - 빨강 ?? : untracked

#### `git add .`
- 전체를 add한다.

#### `git commit ..`
- commit을 하면 log가 생성된다. 협업시 log를 확인하는 것이 중요하다.

#### `git log`
- 로그 정보 보기
결과
```
commit d7c48ee4f76e604099bc453ded2e932c8019a158 // 커밋 로그
Author: sharryhong <kshopzoa15@gmail.com> // 작성자
Date:   Sat Nov 4 16:58:54 2017 +0900 // 날짜

    second Commit // 커밋 메시지
```
#### `git log --oneline`
log와 커밋 메시지만 간략하게 보여준다.

### Reset (담주)
- log를 기준으로 뒤로 갈 수도 있고, 앞으로 갈 수도 있다.
