<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" ref="inputText" v-model="inputTitle">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['listId'],
  data() {
    return {
      inputTitle: ''
    }
  },
  mounted() {
    this.$refs.inputText.focus() // this.$refs객체로 DOM element에 접근
    this.setupClickOutside(this.$el) // this.$el : AddCard의 Element
  },
  computed: {
    invalidInput() {
      return !this.inputTitle.trim()
    }
  },
  methods: {
    ...mapActions([
      'ADD_CARD'
    ]),
    onSubmit() {
      if(this.invalidInput) return
      const {inputTitle, listId} = this
      const pos = this.newCardPos()
      this.ADD_CARD({title: inputTitle, listId, pos})
        .finally(() => this.inputTitle = '')
    },
    newCardPos() {
      const curList = this.$store.state.board.lists.filter(l=>l.id === this.listId)[0]
      if(!curList) return 65535
      const {cards} = curList
      if(!cards.length) return 65535
      return cards[cards.length -1].pos * 2  // 마지막 카드의 pos값 두배
    },
    // 다른 부분 클릭시 닫히게 하는 기능
    setupClickOutside(el) {
      document.querySelector('body').addEventListener('click', e => {
        if(el.contains(e.target)) return
        this.$emit('close')
      })
    }
  }
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
