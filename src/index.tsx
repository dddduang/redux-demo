import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

function user(state = {name: 'redux'}, action: { type: any; name: any; }) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
  }
  return state
}
function project(state = {name: 'min-react'}, action: { type: any; name: any; }) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
  }
  return state
}
const rootReducer = combineReducers({
  project,
  user
})
// const store = createStore(rootReducer) 
const finalCreateStore = compose(applyMiddleware(thunk))(createStore)  // applyMiddlewares  是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。
const store = finalCreateStore(rootReducer, {})

function render(state = store.getState()) {
  const $userName = document.getElementById('userName') as HTMLInputElement
  $userName.innerHTML = state.user.name
}
render()
// console.log(store.getState())


store.subscribe(() => {
  render()
})
// 绑定用户事件
const $userNameInput = document.getElementById('userNameInput') as HTMLInputElement
const userNameButton = document.getElementById('userNameButton') as HTMLInputElement
userNameButton.onclick = (() => {
  const value = $userNameInput.value
  // console.log(value)
  // store.dispatch({ 
  //   name: value,
  //   type: 'CHANGE_NAME'
  // })
  // redux-thunk的作用就是让dispatch方法不仅仅只接收action对象，还可以包含一个方法。我们可以在这个方法内部去调用异步代码
  store.dispatch<any>((dispatch: (arg0: { name: string; type: string; }) => void, getState: any) => {
    setTimeout(() => {
      dispatch({
        name: value,
        type: 'CHANGE_NAME'
      })
    }, 2000)
  }) // 可以看到页面在两秒之后才发生变化
})
