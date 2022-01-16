import { configureStore} from '@reduxjs/toolkit';
import accountReducer from '../features/accountClassification/accountSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },

  middleware: [sagaMiddleware,]
});

export default function configureAppStore(){
  sagaMiddleware.run(rootSaga)  
  return {store,}
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
