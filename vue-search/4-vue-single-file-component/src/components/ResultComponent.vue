<template>
    <div>
        <div v-if="data" class="content">
            <ul>
                <li v-for="item in data">
                    <img v-bind:src="item.image" alt=""> {{item.name}}
                </li>
            </ul>
        </div>
        <div v-else>
            {{query}} 검색어로 찾을 수 없습니다.
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'query']
}
</script>
