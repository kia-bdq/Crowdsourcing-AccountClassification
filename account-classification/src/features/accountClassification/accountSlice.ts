import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface CounterState {
  account: {id:number, username:string, name:string, bio:string, avatar:string};
  tag: string;
  currentID: number;
  error: string;
}

const initialState: CounterState = {
  account : {id:0, username:"", name:"", bio:"", avatar:""},
  tag: '',
  currentID: 1,
  error: ''
};

export const counterSlice = createSlice({
  name: 'account',
  initialState,

  reducers: {
    setAccount: (state, action : PayloadAction<{id:number, username:string, name:string, bio:string, avatar:string}>) => {
      state.account = action.payload ;
      if(state.currentID < 10){
        state.currentID += 1 
      }
    },

    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    // incrementID: state =>{
    //   if(state.currentID < 10){
    //     state.currentID += 1 
    //   }
    // },
  },
  
});

export const { setAccount, setTag, setError  } = counterSlice.actions;

export const selectAccount = (state: RootState) => state.account.account;
export const selectTag = (state: RootState) => state.account.tag;
export const selectError = (state: RootState) => state.account.error;


export default counterSlice.reducer;
