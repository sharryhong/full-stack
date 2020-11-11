<template>
  <div>
    <!-- 테스트할 output 항목
    렌더링 된 출력 : <button> loggedIn 입력 값에 따라 버튼이 DOM에 표시되는지 여부 -->
    <button v-show="loggedIn">Logout</button> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false // 테스트할 input 항목 
    };
  }
};
</script>

<style lang="scss" scoped></style>
