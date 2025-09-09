import { createSlice } from "@reduxjs/toolkit";
const itemsList = [
    { id: 0, title: 'Parapet Boundary Wall', img: '/parapet_jali_images/parapet-boundry-wall.jpg', },
    { id: 1, title: 'Shahi Boundary', img: '/parapet_jali_images/masjid-shahi-boundry.jpg', },
    { id: 2, title: 'Small Parapet-Jali', img: '/parapet_jali_images/parapet-jali1.jpg', },
    { id: 3, title: 'Medium Size Parapet Jali', img: '/parapet_jali_images/parapet-jali.jpg', },
    { id: 4, title: 'Parapet-Jali Design:1', img: '/parapet_jali_images/Parapet-jali-Design-01.jpg', },
    { id: 5, title: 'Parapet-Jali Design:2', img: '/parapet_jali_images/Parapet-jali-Design-02.jpg', },
    { id: 6, title: 'Parapet-Jali Design:3', img: '/parapet_jali_images/Parapet-jali-Design-03.jpg', },
    { id: 7, title: 'Parapet-Jali Design:4', img: '/parapet_jali_images/Parapet-jali-Design-04.jpg', },
    { id: 8, title: 'Parapet-Jali Design:5', img: '/parapet_jali_images/Parapet-jali-Design-05.jpg', },


]
export const ParepetJaliImgSlice = createSlice({
    name: 'ParapetJaliImg',
    initialState: [
 {
                id: 0,
                category: "Dafault Sorting",
                items: [
                    itemsList[0], itemsList[1], itemsList[2], itemsList[3], itemsList[4], itemsList[5], itemsList[6], itemsList[7], itemsList[8]  
                ]
            },
        {
            id: 1,
            category: "Sort by popularity",
            items: [
                itemsList[7], itemsList[8], itemsList[6], itemsList[5], itemsList[4], itemsList[2], itemsList[1], itemsList[3], itemsList[0]
            ]
        },
        {
            id: 2,
            category: "Sort by average reting",
            items: [
                itemsList[8], itemsList[7], itemsList[6], itemsList[5], itemsList[4], itemsList[2], itemsList[1], itemsList[3], itemsList[0]
            ]
        },
        {
            id: 3,
            category: "Sort by latest",
            items: [
                itemsList[8], itemsList[7], itemsList[6], itemsList[5], itemsList[4], itemsList[2], itemsList[1], itemsList[3], itemsList[0]
            ]
        },
        {
            id: 4,
            category: "Sort by price: low to high",
            items: [
                itemsList[0], itemsList[3], itemsList[1], itemsList[2], itemsList[4], itemsList[5], itemsList[6], itemsList[7], itemsList[8]
            ]
        },
        {
            id: 5,
            category: "Sort by price:  high to low",
            items: [
                itemsList[8], itemsList[7], itemsList[6], itemsList[5], itemsList[4], itemsList[2], itemsList[1], itemsList[3], itemsList[0]
            ]
        },

    ]
})
export const ParapetJaliImgAction = ParepetJaliImgSlice.actions;