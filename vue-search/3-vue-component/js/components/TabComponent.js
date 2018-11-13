export default {
    template: '#tabs',
    props: ['tabs', 'selectedTab'],
    data() {
        return {

        }
    },
    methods: {
        onClickTab(tab) {
            this.$emit('@change', tab)
        }
    }
}
