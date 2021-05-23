import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './routes'
import { store, persistor } from './store/index'

ReactDOM.render(
  <ReduxProvider store={store}>
  <PersistGate persistor={persistor}>
    <Routes />
  </PersistGate>
</ReduxProvider>, document.getElementById('root'))

