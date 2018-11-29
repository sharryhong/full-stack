<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a href="" class="modal-default-button"
          @click.prevent="SET_IS_ADD_BOARD(false)">&times;</a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form"
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input">
      </form>
    </div>
    <div slot="footer">
      <button class="btn" :class="{'btn-success': valid}" type="submit"
        form="add-board-form" :disabled="!valid">
        Create Board</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import {mapMutations, mapActions} from 'vuex'

export default {
  components: {
    Modal
  },
  data() {
    return {
      input: '',
      valid: false // input없을 땐 disabled
    }
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    ...mapActions([
        'ADD_BOARD',
        'FETCH_BOARDS'
    ]),
    addBoard() {
      this.SET_IS_ADD_BOARD(false)
      // 상위 컴포넌트인 Home.vue에 이벤트를 전달(emit)하지 않고 vuex의 actions사용 
      this.ADD_BOARD({title: this.input}).then(() => {
          this.FETCH_BOARDS()
      })
    }
  }
}
</script>

<style>

</style>
