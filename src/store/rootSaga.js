import { all } from 'redux-saga/effects'
import { loginRootSaga } from '../components/Login/store'

export default function * () {
  yield all([
    loginRootSaga()
  ])
}
