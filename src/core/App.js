import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from 'Routes'
import { store, persistor } from 'store/index'

export default _ =>
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </ReduxProvider>
