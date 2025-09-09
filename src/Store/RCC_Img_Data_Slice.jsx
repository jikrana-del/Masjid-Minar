import { createSlice } from "@reduxjs/toolkit";
const itemsList = [
    {
        id: 0, title: 'RCC Mimber',img:'/parapet_jali_images/rcc-mimber.jpg'
        ,
    }
]
export const RccImgDataSlice =   createSlice({
    name:'RccImgData',
    initialState:[
        {
            id: 0,
            category: "Dafault Sorting",
            items: [
                itemsList[0]
            ]
        },

        {
            id: 1,
            category: "Sort by popularity",
            items: [
                itemsList[0]
            ]
        },
        {
            id: 2,
            category: "Sort by average reting",
            items: [
                itemsList[0]
            ]
        },
        {
            id: 3,
            category: "Sort by latest",
            items: [itemsList[0]]
        },
        {
            id: 4,
            category: "Sort by price: low to high",
            items: [ itemsList[0]]
        },
        {
            id: 5,
            category: "Sort by price:  high to low",
            items: [itemsList[0]]
        },


    ]
})
export const RccImgDataAction = RccImgDataSlice.actions;
