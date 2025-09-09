import { createSlice } from "@reduxjs/toolkit";
import gumbad from '../components/Product_component/images/masjid-gumbad.jpg';


const itemsList = [
    {
        id: 0,
        title: 'Musalla Tiles',
        img: '/parapet_jali_images/musalla-tiles.jpg',
    },
    {
        id:1,
        title:'Gumbad',
        img:gumbad
    }
]
export const MusallaImgSlice =   createSlice({
    name:'MusallaImg',
    initialState:[
        {
            id: 0,
            category: "Dafault Sorting",
            items: [
                itemsList[1],itemsList[0],
            ]
        },

        {
            id: 1,
            category: "Sort by popularity",
            items: [
                itemsList[1], itemsList[0],
            ]
        },
        {
            id: 2,
            category: "Sort by average reting",
            items: [
                itemsList[1], itemsList[0],
            ]
        },
        {
            id: 3,
            category: "Sort by latest",
            items: [
                itemsList[0], itemsList[1],
            ]
        },
        {
            id: 4,
            category: "Sort by price: low to high",
            items: [
                itemsList[1], itemsList[0],
            
            ]
        },
        {
            id: 5,
            category: "Sort by price:  high to low",
            items: [
                itemsList[0], itemsList[1],
            ]
        },

    ]
 })
 export const MusallaImgAction = MusallaImgSlice.actions;