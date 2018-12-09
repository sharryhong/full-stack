<template>
<div>
    <div class="board-wrapper">
        <div class="board">
            <div class="board-header">
                <span class="board-title">{{board.title}}</span>
                <a href="#" class="board-header-btn show-menu" @click.prevent="onShowSettings">
                      Show Menu</a>
            </div>
            <div class="list-section-wrapper">
                <div class="list-section">
                    <div class="list-wrapper" v-for="list in board.lists" :key="list.pos">
                        <List :data="list" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BoardSettings v-if="isShowBoardSettings" />
    <router-view></router-view>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
import List from './List.vue'
import BoardSettings from './BoardSettings.vue'
import dragger from '../utils/dragger'

export default {
    components: {
        List,
        BoardSettings
    },
    data() {
        return {
            bid: 0,
            loading: false,
            cDragger: null // card Dragger 객체 저장
        }
    },
    computed: {
        ...mapState({
            board: 'board',
            isShowBoardSettings: 'isShowBoardSettings'
        })
    },
    created() {
        this.SET_IS_SHOW_BOARD_SETTINGS(false)
        this.fetchData()
            .then(() => {
                this.SET_THEME(this.board.bgColor)
            })
    },
    updated() {
        // 드래그앤드롭: Board컴포넌트 내의 자식 컴포넌트들이 모두 렌더링 된 후
        // 자식 컴포넌트가 모두 마운트된 시점인 updated에서 실행 해준다.
        this.setCardDragabble()
    },
    methods: {
        ...mapMutations([
            'SET_THEME',
            'SET_IS_SHOW_BOARD_SETTINGS'
        ]),
        ...mapActions([
            'FETCH_BOARD',
            'UPDATE_CARD'
        ]),
        fetchData() {
            this.loading = true
            return this.FETCH_BOARD({
                    id: this.$route.params.bid
                })
                .then(() => this.loading = false)
        },
        setCardDragabble() {
            if (this.cDragger) this.cDragger.destroy() // 우선 사용된 드래그인드롭 객체 제거
            this.cDragger = dragger.init(Array.from(this.$el.querySelectorAll('.card-list')))
            this.cDragger.on('drop', (el, wrapper, target, siblings) => {
                const targetCard = {
                    id: el.dataset.cardId * 1, // 숫자로 바꿈
                    pos: 65535 // 기본 값
                }

                const {
                    prev,
                    next
                } = dragger.sibling({
                    el,
                    wrapper,
                    candidates: Array.from(wrapper.querySelectorAll('.card-item')),
                    type: 'card'
                })

                if (!prev && next) targetCard.pos = next.pos / 2 // 맨 앞인 경우
                else if (!next && prev) targetCard.pos = prev.pos * 2 // 맨 뒤인 경우
                else if (prev && next) targetCard.pos = (prev.pos + next.pos) / 2 // 중간인 경우
                this.UPDATE_CARD(targetCard)
            })
        },
        onShowSettings() {
            this.SET_IS_SHOW_BOARD_SETTINGS(true)
        }
    }
}
</script>

<style>
.board-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.board {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.board-header {
    flex: none;
    padding: 8px 4px 8px 8px;
    margin: 0;
    height: 32px;
    line-height: 32px;
}

.board-header input[type=text] {
    width: 200px;
}

.board-header-btn {
    border-radius: 4px;
    padding: 2px 10px;
    height: 30px;
    margin-bottom: 15px;
    display: inline-block;
    color: #fff;
}

.board-header-btn:hover,
.board-header-btn:focus {
    background-color: rgba(0, 0, 0, .15);
    cursor: pointer;
}

.board-title {
    font-weight: 700;
    font-size: 18px;
}

.show-menu {
    font-size: 14px;
    position: absolute;
    right: 15px;
}

.list-section-wrapper {
    flex-grow: 1;
    position: relative;
}

.list-section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 10px;
}

.list-wrapper {
    display: inline-block;
    height: 100%;
    width: 272px;
    vertical-align: top;
    margin-right: 5px;
}

.card-item.gu-transit {
    background-color: #555 !important;
}

.card-item.gu-mirror {
    opacity: 1 !important;
    background-color: #fff !important;
    transform: rotate(3deg) !important;
}

/* .list-wrapper.gu-transit .list {
  background-color: #555 !important;
  color: #555 !important;
  opacity: 1 !important;
}
.list-wrapper.gu-mirror .list {
  opacity: 1 !important;
  background-color: #fff !important;
  transform: rotate(3deg) !important;
} */
</style>
