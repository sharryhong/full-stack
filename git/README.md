# 유용한 깃헙 명령어

#### 강제 커밋 리셋
- $ `git reset xxxxxxlogxxxxx --hard` 후
 $ `git push origin -f`

#### 회사컴에서 내 깃헙 등록
1. 터미널에서 해당 레파지토리 폴더로 들어간 후
2. $ `git config user.name 내깃헙아이디`
3. $ `git config user.email 내깃헙이메일`
4. 이제 내 깃헙에도 올린 흔적이 생긴다. :)

#### git branch 만들고 해당브런치로 바로가기
- $ `git checkout -b newBranchName`

#### 예) git clone후 develop 브랜치 가져오기
- $ `git checkout -b develop origin/develop`

#### 예) develop 브랜치로 부터 새로운 브랜치 만들기
- $ `git branch newBranchName develop`

#### 커밋 제목 및 내용 적기
- $ `git commit -m " message 1 line
message 2 line
message 3 line
....
message last line"`

#### 깃헙 파일명 대소문자 수정하기
- Abc -> abc로 수정하고 푸쉬하면 깃헙내에서는 수정이 되어있지 않는 현상 발생
- $ `git mv -f 경로/Abc.jsp 경로/abc.jsp`
- 혹은 rm으로 파일을 삭제하고 다시 만드는 방법도 있다.
