<template>
  <div>
    <p v-if="error" data-testId="message-error">{{ error }}</p>
    <p v-else data-testId="message">{{ message.text }}</p>
  </div>
</template>

<script>
  import { getMessage } from '@/service/axios.js'

  export default {
    data() {
      return {
        message: {},
        error: null
      }
    },
    async created() {
      try {
        this.message = await getMessage()
      } catch (err) {
        this.error = 'Oops! Something went wrong.'
      }
    }
  }
</script>
