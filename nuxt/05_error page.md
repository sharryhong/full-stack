## 자체 오류 페이지

- SPA는 404 status code를 보내지 않는다.
- Nuxt는 Universal Rendering을 사용하기 때문에 404 상태 코드를 반환 할 수 있다.
- 페이지가 서버 측에 존재하지 않는다는 것을 알고 있으므로, 적절한 상태 코드를 반환 할 수 있다. 

> layouts/error.vue 오류 페이지 예
````
<script>
export default {
  name: 'NuxtError',
  props: {
    error: {  // Send in the error
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message // Set the SEO title
    }
  },
  computed: {
    statusCode() {  // Get the status code
      return (this.error && this.error.statusCode) || 500
    },
    message() {  // to Print the error
      return this.error.message
    }
  }
}
</script>
````
