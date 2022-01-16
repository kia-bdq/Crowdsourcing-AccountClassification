import { fork, all } from "redux-saga/effects"
import accountSaga from '../features/accountClassification/sagas'

export default function* rootSaga() {
    yield all([
        fork(accountSaga),
    ])
  }