<template>
    <div>
        <div class="home-title">Personal Boards</div>
        <div class="board-list" ref="boardList">
            <div class="board-item" v-for="b in boards" :key="b.id" :data-bgcolor="b.bgColor" ref="boardItem">
                <router-link :to="`/b/${b.id}`">
                    <div class="board-item-title">{{b.title}}</div>
                </router-link>
            </div>
            <div class="board-item board-item-new">
                <a class="new-board-btn" href="" @click.prevent="SET_IS_ADD_BOARD(true)">
                  Create new board...
                </a>
            </div>
        </div>
        <AddBoard v-if="isAddBoard" @close="isAddBoard" @submit="onAddBoard"/>
    </div>
</template>

<script>
import {board} from '../api'
import AddBoard from './AddBoard.vue'
import {mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            loading: false,
            boards: [],
            error: ''
        }
    },
    components: {
        AddBoard
    },
    computed: {
        ...mapState([
            'isAddBoard'
        ])
    },
    created() {
        this.fetchData()
    },
    updated() { // created다음에 호출, 데이터객체에 변화가 감지되면 호출됨
        // Array.from(document.querySelectorAll('.board-item')).forEach(el => {
        //   el.style.backgroundColor = el.dataset.bgcolor || '#ddd'
        // })
        this.$refs.boardItem.forEach( el => {
            el.style.backgroundColor = el.dataset.bgcolor
        })
    },
    methods: {
        ...mapMutations([
            'SET_IS_ADD_BOARD'
        ]),
        fetchData() {
            this.loading = true
            board.fetch()
                .then(data => {
                    this.boards = data.list
                })
                .finally( _ => {
                    this.loading = false
                })
        },
        onAddBoard() {
            this.fetchData()
        }
    }

}
</script>

<style>
.home-title {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
}

.board-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}

.board-item {
    width: 23%;
    height: 100px;
    margin: 0 2% 20px 0;
    border-radius: 3px;
}

.board-item a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
}

.board-item a:hover,
.board-item a:focus {
    background-color: rgba(0, 0, 0, .1);
    color: #666;
}

.board-item-title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
}

.board-item a.new-board-btn {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height: 100px;
    width: inherit;
    color: #888;
    font-weight: 700;
}
</style>
