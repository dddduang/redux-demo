import {handleActions} from 'redux-actions';
import {ADD_TODO} from './types';
import {ITodoModel} from './models'

// 初始的状态,就像react中组件内的初始状态，只不过这个是全局的。
const initialState: ITodoModel = {
    completed: true,
    id: 1,
    text: 'Use Redux',
};

export const todoReducer = handleActions<ITodoModel>({
     [ADD_TODO]: (state: any, action: any) => {
       console.log('reducer->state:', state);
       console.log('reducer->action:', action);
       return {completed: true, text: action.payload.text, id: 2};
   },
}, initialState);