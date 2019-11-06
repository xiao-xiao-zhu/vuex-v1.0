<template>
    <div class="hello">
        <h1>{{ this.$store.state.count }}</h1>
        <h1>{{ this.$store.getters.getStateCount }}</h1>

        <p>count的值：{{this.$store.state.count}}</p>
        <button @click="addFun">+</button>
        <button @click="reductionFun">-</button>

        <div style="border:1px solid pink; margin-top: 50px">{{count1}}</div>
    </div>
</template>

<script>
    // import {mapState, mapActions, mapGetters} from 'vuex'
    import {mapState} from 'vuex'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },


        computed: {
            ...mapState({
                count1: state => state.count
            })
        },
        methods: {
            // addFun() {
            //     this.$store.commit("add")
            // },
            // reductionFun(){
            //     this.$store.commit("reduction")
            // }

            addFun() {
                this.$store.dispatch("addFun", 10);
            },
            reductionFun() {
                this.$store.dispatch("reductionFun")
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
