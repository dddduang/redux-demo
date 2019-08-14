import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import { createStore, combineReducers } from 'redux'

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
var rootReducer = combineReducers({
  user,
  project
})
var store = createStore(rootReducer)

function render(state = store.getState()) {
  var $userName = document.getElementById('userName') as HTMLInputElement
  $userName.innerHTML = state.user.name
}
render()
console.log(store.getState())


store.subscribe(() => {
  render()
})
// 绑定用户事件
var $userNameInput = document.getElementById('userNameInput') as HTMLInputElement
var userNameButton = document.getElementById('userNameButton') as HTMLInputElement
userNameButton.onclick = (() => {
  var value = $userNameInput.value
  console.log(value)
  store.dispatch({
    type: 'CHANGE_NAME',
    name: value
  })
})
