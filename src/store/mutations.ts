import * as types from './mutation-types'
import { State } from './index'


const mutations = {
	//点击进入下一题
	[types.ADD_ITEMNUM](state: State, num: number) {
		state.itemNum += num;
	},
	//记录答案
	[types.REMBER_ANSWER](state: State, id: number) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	[types.REMBER_TIME](state: State) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[types.INITIALIZE_DATA](state: State) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},
}





export default mutations