import { createSlice } from "@reduxjs/toolkit";

const itemsList = [
    { id: 0, size: 90, title: '90 FEET MINAR', img: '/Minar_sizes_images/90-feet-300x452 (1).jpg' },
    { id: 1, size: 70, title: '70 FEET MINAR', img: '/Minar_sizes_images/70-feet-300x451 (1).jpg' },
    { id: 2, size: 60, title: '60 FEET MINAR', img: '/Minar_sizes_images/60-feet-300x458 (1).jpg' },
    { id: 3, size: 50, title: '50 FEET MINAR', img: '/Minar_sizes_images/50-feet-masjid-minar-300x452 (1).jpg' },
    { id: 4, size: 44, title: '44 FEET MINAR', img: '/Minar_sizes_images/44-feet-aman-masjid-minar-300x454 (1).jpg' },
    { id: 5, size: 42, title: '42 FEET MINAR', img: '/Minar_sizes_images/42-feet-300x452 (1).jpg' },
    { id: 6, size: 40, title: '40 FEET MINAR', img: '/Minar_sizes_images/40-feet-300x454.jpg' },
    { id: 7, size: 35, title: '35 FEET MINAR', img: '/Minar_sizes_images/35-feet-300x449.jpg' },
    { id: 8, size: 32, title: '32 FEET MINAR', img: '/Minar_sizes_images/32-feet-300x452.jpg' },
    { id: 9, size: 30, title: '30 FEET MINAR', img: '/Minar_sizes_images/30-feet-aman-masjid-minar-300x454.jpg' },
    { id: 10, size: 28, title: '28 FEET MINAR', img: '/Minar_sizes_images/28-feet-aman-masjid-minar-300x452.jpg' },
    { id: 11, size: 25, title: '25 FEET MINAR', img: '/Minar_sizes_images/25-feet-aman-masjid-minar-300x453.jpg' },
    { id: 12, size: 23, title: '23 FEET MINAR', img: '/Minar_sizes_images/23-feet-300x451.jpg' },
    { id: 13, size: 22, title: '22 FEET MINAR', img: '/Minar_sizes_images/22-feet-masjid-minar-300x454.jpg' },
    { id: 14, size: '20-5', title: '20.5 FEET MINAR', img: '/Minar_sizes_images/20-feet-masjid-minar-300x452.jpg' },
    { id: 15, size: 18, title: '18 FEET MINAR', img: '/Minar_sizes_images/18-feet-masjid-minar-300x454.jpg' },
    { id: 16, size: 17, title: '17 FEET MINAR', img: '/Minar_sizes_images/17-feet-masjid-minar-300x451.jpg' },
    { id: 17, size: 16, title: '16 FEET MINAR', img: '/Minar_sizes_images/16-feet-masjid-minar-300x451.jpg' },
    { id: 18, size: 14, title: '14 FEET MINAR', img: '/Minar_sizes_images/14-feet-masjid-minar-300x450.jpg' },
    { id: 19, size: 12, title: '12 FEET MINAR', img: '/Minar_sizes_images/12-feet-masjid-minar-300x450.jpg' },
    { id: 20, size: 11, title: '11 FEET MINAR', img: '/Minar_sizes_images/11-feet-masjid-minar-300x450.jpg' },
    { id: 21, size: 8, title: '8 FEET MINAR', img: '/Minar_sizes_images/8-feet-masjid-minar-300x451.jpg' },
    { id: 22, size: 6, title: '6 FEET MINAR', img: '/Minar_sizes_images/6-feet-masjid-minar-300x456.jpg' },
    { id: 23, size: 5, title: '5 FEET MINAR', img: '/Minar_sizes_images/5-feet-masjid-minar-300x455.jpg' },
    { id: 24, size: '3-5', title: '3.5 FEET MINAR', img: '/Minar_sizes_images/3.5-feet-masjid-minar-300x452.jpg' },
    { id: 25, size: 2, title: '2 FEET MINAR', img: '/Minar_sizes_images/2-feet-masjid-minar-300x452.jpg' }
]
console.log(itemsList);

export const MinarImgSlice = createSlice({
    name: 'MinarImg',
    initialState: [
        {
            id: 0,
            category: "Dafault Sorting",
            items: [
                itemsList[0], itemsList[1], itemsList[2], itemsList[3], itemsList[4], itemsList[5], itemsList[6], itemsList[7], itemsList[8], itemsList[9], itemsList[10], itemsList[11], itemsList[12], itemsList[13], itemsList[14],
                itemsList[15], itemsList[16], itemsList[17], itemsList[18], itemsList[19], itemsList[20], itemsList[21], itemsList[22], itemsList[23], itemsList[24], itemsList[25]
            ]
        },
        {
            id: 1,
            category: "Sort by popularity",
            items: [
                itemsList[0], itemsList[1], itemsList[2], itemsList[6], itemsList[5], itemsList[7], itemsList[8], itemsList[12], itemsList[15], itemsList[17], itemsList[18], itemsList[20], itemsList[19], itemsList[21], itemsList[23],
                itemsList[25], itemsList[24], itemsList[22], itemsList[16], itemsList[14], itemsList[13], itemsList[11], itemsList[10], itemsList[9], itemsList[4], itemsList[3]
            ]
        },
        {
            id: 2,
            category: "Sort by average reting",
            items: [
                itemsList[0], itemsList[23], itemsList[1], itemsList[2], itemsList[6], itemsList[5], itemsList[7], itemsList[8], itemsList[12], itemsList[15], itemsList[17], itemsList[18], itemsList[20], itemsList[19], itemsList[21],
                itemsList[25], itemsList[24], itemsList[22], itemsList[16], itemsList[14], itemsList[13], itemsList[11], itemsList[10], itemsList[9], itemsList[4], itemsList[3]
            ]
        },
        {
            id: 3,
            category: "Sort by latest",
            items: [
                itemsList[0], itemsList[1], itemsList[2], itemsList[6], itemsList[5], itemsList[7], itemsList[8], itemsList[12], itemsList[15], itemsList[17], itemsList[18], itemsList[20], itemsList[19], itemsList[21], itemsList[23], itemsList[25], itemsList[24],
                itemsList[22], itemsList[16], itemsList[14], itemsList[13], itemsList[11], itemsList[10], itemsList[9], itemsList[4], itemsList[3]
            ]
        },
        {
            id: 4,
            category: "Sort by price: low to high",
            items: [
                itemsList[3], itemsList[4], itemsList[9], itemsList[10], itemsList[11], itemsList[13], itemsList[14], itemsList[16], itemsList[22], itemsList[24], itemsList[25], itemsList[23], itemsList[21], itemsList[19], itemsList[20],
                itemsList[18], itemsList[17], itemsList[15], itemsList[12], itemsList[8], itemsList[7], itemsList[5], itemsList[6], itemsList[2], itemsList[1], itemsList[0]
            ]
        },
        {
            id: 5,
            category: "Sort by price:  high to low",
            items: [
                itemsList[0], itemsList[1], itemsList[2], itemsList[5], itemsList[6], itemsList[7], itemsList[8], itemsList[12], itemsList[15], itemsList[17], itemsList[18], itemsList[20], itemsList[19], itemsList[21], itemsList[23],
                itemsList[25], itemsList[24], itemsList[22], itemsList[16], itemsList[14], itemsList[13], itemsList[11], itemsList[10], itemsList[9], itemsList[4], itemsList[3]
            ]
        },
    ]
})
export const MinarImgAction = MinarImgSlice.actions;