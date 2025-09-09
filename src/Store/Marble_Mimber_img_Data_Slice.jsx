import { createSlice } from "@reduxjs/toolkit";
const itemsList = [
    {
        id: 0,
        title: 'Marble Mimber',
        img: '/Marble_mimber_images/marble-mimber.jpg',
},
    {
        id: 1,
        title: 'Wuzu Stand',
        img: '/Marble_mimber_images/harmain-traders-wuzu-stand.jpg',
},
    {
        id: 2,
        title: 'Masjid-Marble-Mehrab',
        img: '/Marble_mimber_images/masjid-marble-mehrab.jpg'
},
    {
        id: 3,
        title: 'Marble Jali for Dargah',
        img: '/Marble_mimber_images/marble-jali-for-dargah.jpg'
},
    {
        id: 4,
        title: 'Marble Qibla and Mimber',
        img: '/Marble_mimber_images/Marble-Qibla-and-member.jpg',
},

]
export  const MarbleMimberImgSlice =   createSlice({
    name:"MarbleMimberImgData",
    initialState: [
        {
            id: 0,
            category: "Dafault Sorting",
            items: [
                itemsList[0], itemsList[1], itemsList[2], itemsList[3], itemsList[4],
            ]
        },
        {
            id: 1,
            category: "Sort by popularity",
            items: [
                itemsList[4], itemsList[3], itemsList[2], itemsList[1], itemsList[0]
            ]
        },
        {
            id: 2,
            category: "Sort by average reting",
            items: [
                itemsList[4], itemsList[3], itemsList[2], itemsList[1], itemsList[0]
            ]
        },
        {
            id: 3,
            category: "Sort by latest",
            items: [
                itemsList[4], itemsList[3], itemsList[2], itemsList[1], itemsList[0]
            ]
        },
        {
            id: 4,
            category: "Sort by price: low to high",
            items: [
                itemsList[0], itemsList[1], itemsList[2], itemsList[3], itemsList[4]
            ]
        },
        {
            id: 5,
            category: "Sort by price:  high to low",
            items: [
                itemsList[4], itemsList[3], itemsList[2], itemsList[1], itemsList[0], itemsList[2], itemsList[1], itemsList[3], itemsList[0]
            ]
        },

    ]
})
export const MarbleMimberImgAction = MarbleMimberImgSlice.actions;
