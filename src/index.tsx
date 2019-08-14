import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

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
const store = createStore(rootReducer)

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
  console.log(value)
  store.dispatch({
    name: value,
    type: 'CHANGE_NAME'
  })
})
