import { createSlice } from "@reduxjs/toolkit";

 export const Uniqe_Parapet_jali_Slice = createSlice({
    name:'uniqe',
initialState :[],
reducers:{
    uniqeParapetData :(state, action)=>{
        return action.payload;
    }
}
})
export const  uniqeParapetAction = Uniqe_Parapet_jali_Slice.actions;