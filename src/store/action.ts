import { Commit, Action, ActionTree } from 'vuex'
import * as types from './mutation-types'
import { State } from './index'


const addNum: Action<State, any> = ({ commit, state }, id) => {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit(types.REMBER_ANSWER, id);
    if (state.itemNum < state.itemDetail.length) {
        commit(types.ADD_ITEMNUM, 1);
    }
}

const initializeData: Action<State, any> = ({ commit }) => {
    commit(types.INITIALIZE_DATA);
}

export default {
    addNum,
    initializeData
}