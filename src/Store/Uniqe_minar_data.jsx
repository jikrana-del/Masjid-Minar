import { createSlice } from "@reduxjs/toolkit";

export const   uniquMinarDataSlice = createSlice({
    name:'uniqeData',
    initialState: [],
    reducers:{
        MinarUniqeData :(state,action)=>{
            console.log(action.payload);
            
 return action.payload;


        }
    }
})
export const uniqeDataAction = uniquMinarDataSlice.actions