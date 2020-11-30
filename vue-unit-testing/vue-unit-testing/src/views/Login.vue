<template>
  <div>
    <LoginForm @loginSubmitted="onLoginSubmitted" />
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm'
  export default {
    components: {
      LoginForm
    },
    methods: {
      onLoginSubmitted(data) {
        console.log('onLoginSubmitted', data);
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>