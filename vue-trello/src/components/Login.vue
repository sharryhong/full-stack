<template>
    <div class="login">
    <h2>Login to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email"
          v-model="email" autofocus placeholder="e.g., test@test.com" />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password"
          v-model="password" placeholder="123123" />
      </div>
      <button class="btn" :class="{'btn-success': !invalidForm}" type="submit"
        :disabled="invalidForm">Login</button>
    </form>
    <pre class="error" v-if="error">{{error}}</pre>
  </div>
</template>

<script>
import {auth, setAuthInHeader} from '../api'
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
            rPath: ''
        }
    },
    computed: {
        invalidForm() {
            return !this.email || !this.password
        }
    },
    created() {
        this.rPath = this.$route.query.rPath || '/'
    },
    methods: {
        ...mapActions([
            'LOGIN'
        ]),
        onSubmit() {
            this.LOGIN({email: this.email, password: this.password})
              .then(data => {
                  this.$router.push(this.rPath)
              })
              .catch(err => {
                  this.error = err.response.data.error
              })
        }
    }
}
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto;
}
.error {
  color: #f00;
}
</style>
