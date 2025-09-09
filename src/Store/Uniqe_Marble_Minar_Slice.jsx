import { createSlice } from "@reduxjs/toolkit";

 export const UniqeMarbleMinarSlice =    createSlice({
name:'UniqeMarbleMinar',
initialState :[],
reducers:{
    UniqeMarbleMinar :(state , action)=>{
return action.payload;
    }
}
})
export const UniqeMarbleMinarAction = UniqeMarbleMinarSlice.actions;