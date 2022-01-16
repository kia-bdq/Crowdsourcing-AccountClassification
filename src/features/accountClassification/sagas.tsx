import { call, put, takeEvery } from 'redux-saga/effects'
import api from './accountAPIs';
import { setAccount, setError} from './accountSlice';
// import { useAppSelector } from "../../app/hooks";
// import { selectID } from './accountSlice';


let counter = 0
function* fetchUser() {
    // const id = useAppSelector(selectID)
   try {
      counter+=1
      // if(counter<=10){
        const user: any = yield call(() => api.fetchUserAccount(counter))
        yield put(setAccount(user))
      // }
   } catch (e:any) {
        // console.log(e.message, counter)
        yield put(setError(e.message))
   }
}


function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;