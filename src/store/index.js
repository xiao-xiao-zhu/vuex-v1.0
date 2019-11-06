import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 创建实例 并导出
export default new Vuex.Store({
    state: {
        count: 1
    },
    getters: { // 监听 依赖的的值变化，会重新计算  类似vue的computed
        getStateCount: function (state) { // 上面的state
            return state.count + 1
        }
    },
    mutations: { // 修改count值  提交mutation来修改  +1  -1
        add(state,n){
            state.count = state.count+n;
        },
        reduction(state){
            state.count = state.count-1;
        }
    },
    actions: { // 注册actions 类似vue里的methods  在actions中提交mutation再去修改状态值
        addFun(context,n) {
            context.commit("add",n)
        },
        reductionFun(context){
            context.commit("reduction")
        }
    },
    modules: {} // 多文件状态管理
})
