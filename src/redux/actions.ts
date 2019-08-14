// createAction 让你可以轻松创建一个action
import {createAction} from 'redux-actions';

import {ITodoModel} from './models';

import {ADD_TODO} from './types';

const addTodo = createAction<ITodoModel, string>(
    ADD_TODO,
    (text: string) => ({text, completed: false})
);

export {
    addTodo
} 