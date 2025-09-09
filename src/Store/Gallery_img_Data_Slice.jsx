import { createSlice } from "@reduxjs/toolkit";
const itemsList = [
    { title: "All Masjid Product", img: '/Gallery_images/All-Masjid-Parts-300x224.jpg' },
    { title: 'High Quality Minar', img: '/Gallery_images/high-quality-minar-300x230.jpg' },
    { title: 'Khubsurat Minar', img: '/Gallery_images/khubsurat-minar-300x227.jpg' },
    { title: 'Lighting Minar', img: '/Gallery_images/Lighting-Minar-khubsurat-Minar-300x228.jpg' },
    { title: 'Madni Minar', img: '/Gallery_images/Madani-Minar-300x233.jpg' },
    { title: 'Makki Minar', img: '/Gallery_images/makki-minar-300x235.jpg' },
    { title: 'Minar Block', img: '/Gallery_images/minar-block.jpg' },
    { title: 'Mosque Minar-Masjid ke Minar', img: '/Gallery_images/mosque-minar-all2-300x151.jpg' },
    { title: 'Shandar Minar', img: '/Gallery_images/Shandar-Minar-300x232.jpg' },
    { title: 'Strong Minar', img: '/Gallery_images/strong minar.avif' }
]
export const MinarGallerySlice = createSlice({
    name: 'gallery',
    initialState:
        [
            {
                id: 0,
                category: "Dafault Sorting",
                items: [
                    itemsList[0], itemsList[1], itemsList[2], itemsList[3], itemsList[4], itemsList[5], itemsList[6], itemsList[7], itemsList[8], itemsList[9]  
                ]
            },
            {
                id: 1,
                category: "Sort by popularity",
                items: [
                    itemsList[5], itemsList[4], itemsList[8], itemsList[2], itemsList[3], itemsList[0], itemsList[6], itemsList[1], itemsList[7], itemsList[9]  
                ]
            },
            {
                id: 2,
                category: "Sort by average reting",
                items: [
                    itemsList[0], itemsList[5], itemsList[4], itemsList[8], itemsList[2], itemsList[3], itemsList[6], itemsList[9], itemsList[1], itemsList[7]
                ]
            },
            {
                id: 3,
                category: "Sort by latest",
                items: [
                    itemsList[5], itemsList[4], itemsList[8], itemsList[2], itemsList[3], itemsList[0], itemsList[6], itemsList[9], itemsList[1], itemsList[7]
                ]
            },
            {
                id: 4,
                category: "Sort by price: low to high",
                items: [
                    itemsList[7], itemsList[1], itemsList[9], itemsList[6], itemsList[0], itemsList[8], itemsList[2], itemsList[3], itemsList[4], itemsList[5]
                ]
            },
            {
                id: 5,
                category: "Sort by price:  high to low",
                items: [
                    itemsList[5], itemsList[4], itemsList[8], itemsList[2], itemsList[3], itemsList[0], itemsList[6], itemsList[9], itemsList[1], itemsList[7]
                ]
            },
           
        ]
})
export const MinarGalleryAction = MinarGallerySlice.actions;