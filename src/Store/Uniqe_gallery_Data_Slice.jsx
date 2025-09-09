import { createSlice } from "@reduxjs/toolkit";

export const UniqeGalleryDataSlice = createSlice({
    name:'uniqeGalleryData',
    initialState:[],
    reducers:{
        UniqeGalleryData:(state,action)=>{
             return action.payload;
           
        }
    }
 })
 export const UniqeGalleryDataAction = UniqeGalleryDataSlice.actions