import { createSlice } from "@reduxjs/toolkit";
const makeSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')   // spaces → dash
        .replace(/:/g, '')      // remove colon
        .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
};
 
export const All_parapet_jali_slice = createSlice({
    name: 'All_parapet_jali',
    initialState: [
        {
            id: 0,
            title: 'Parapet Boundary Wall',
            img: '/parapet_jali_images/parapet-boundry-wall.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>   is one of the renowned <strong>manufacturers </strong> quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> . Establishment in <strong>1983 </strong>, we are engaged in <strong> manufacturing </strong> and <strong>  supplying Parapet Boundary Wall.</strong>  Available in several designs, finishes, and sizes. This  <strong>Parapet Jali </strong> is ideal for fencing the areas around the structures to provide them with stunning looks. Our Proficient professionals have designed and constructed this wall with Quality assurance cement concrete and creative designs in conformance with overall processes. At </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>, customers can purchase this  <strong>parapet Jali </strong>  i at the most affordable rates. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },


        {
            id: 1,
            title: 'Shahi Boundary',
            img: '/parapet_jali_images/masjid-shahi-boundry.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> is one of the renowned  <strong>manufactures </strong>quickest growing </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>.We are professional in  <strong>manufacturing </strong> and <strong> supplying </strong> premium quality <strong>Shahi Boundary </strong>  1. Available in several designs, finishes, and sizes. We Assure Quality guaranteeing cement concrete and creative designs in conformance with overall processes. </>, type: 'text' },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> offers this <strong>Shahi Boundary </strong>  1 to the Client in several designs and finishes at reasonable prices. We also caterers different products like</> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },

        {
            id: 2,
            title: 'Small Parapet-Jali',
            img: '/parapet_jali_images/parapet-jali1.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> Being a <strong> client-centric organization</strong>, , we are engaged in offering an excellent quality of <strong>small </strong></> },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <>A <strong>Parapet</strong> is a barrier that is an extension of the wall at the edge of a roof, terrace, balcony, walkway or other structure. Where extending above a roof, a <strong>Parapet </strong>  may simply be the portion of an exterior wall that continues above the line of the roof surface, or maybe a continuation of a vertical feature beneath the roof. We have <strong> manufactured </strong>  and tested the parapet to meet the containment standards specified in the codes. Much of the earlier testing work was involved with achieving a <strong> Small Parapet-Jali </strong> which would absorb the impact load. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 3,
            title: 'Medium Size Parapet Jali',
            img: '/parapet_jali_images/parapet-jali.jpg',
            description:
                [
                    { text: <>since our Establishment in <strong>1983 </strong>, We have offered <strong>Medium Size parapet Boundary Wall.</strong> Available in several designs, finishes, and sizes, this <strong>Boundary Wall </strong>is ideal for fencing the areas around the structures to provide  them with stunning looks. Our talented professionals have designed and constructed this wall with quality assurance cement concrete and creative designs in conformance with overall processes. Additionally, customers can avali this <strong>Medium size parapet Boundary Wall </strong> from us at the most affordable rates.</> }
                ]
        },
        {
            id: 4,
            title: 'Parapet-Jali Design:1',
            img: '/parapet_jali_images/Parapet-jali-Design-01.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  is one of the fastest-growing </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> companies in the industry. We were established in 1983 and We are professional in <strong>manufacturing </strong> and <strong>  supplying premium quality Shahi Boundary</strong>.We offer a variety of designs, finishes, and sizes.The  </>, type: 'text' },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> is ideal for fencing the areas surrounding structures so they have a stunning appearance. Professionals from our organization designed and built this wall using quality cement concrete and creative designs in accordance with overall processes. This  <strong> Shahi Boundary</strong> is available for purchase at</> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> at the most competitive prices. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 5,
            title: 'Parapet-Jali Design:2',
            img: '/parapet_jali_images/Parapet-jali-Design-02.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>   is established in  <strong>1983,</strong> , we have offered <strong> Medium Size Parapet Boundary Wall.</strong>  Available in several designs, finishes, and sizes, this <strong> boundary wall</strong>  is ideal for fencing the areas around the structures to provide them with stunning looks. Our talented professionals have designed and constructed this wall with <strong> Quality assurance</strong> cement concrete and creative designs in conformance with overall processes. Additionally, customers can avail this <strong> Medium Size Parapet Boundary Wall </strong> from us at the most affordable rates. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 6,
            title: 'Parapet-Jali Design:3',
            img: '/parapet_jali_images/Parapet-jali-Design-03.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  is one of the fastest-growing </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> companies in the industry.We were established in 1983 and are engaged in manufacturing and supplying  <strong>Parapet Boundary Walls. We offer a variety of designs, finishes, and sizes. The</strong> </>, type: 'text' },
                // { text: <span>Parapet Boundary Walls.</span>, route:'/produc/parapet-boundary-wall'},
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> is ideal for fencing the areas surrounding structures so they have a stunning appearance. Professionals from our organization designed and built this wall using quality cement concrete and creative designs in accordance with overall processes. This </> },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> is available for purchase at </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> at the most competitive prices.</> },
            ]
        },

        {
            id: 7,
            title: 'Parapet-Jali Design:4',
            img: '/parapet_jali_images/Parapet-jali-Design-04.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  is one of the fastest-growing </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> companies in the industry.We were established in 1983 and are engaged in manufacturing and supplying  <strong>Parapet Boundary Walls. We offer a variety of designs, finishes, and sizes. The</strong> </>, type: 'text' },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> is ideal for fencing the areas surrounding structures so they have a stunning appearance. Professionals from our organization designed and built this wall using quality cement concrete and creative designs in accordance with overall processes. This </> },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> is available for purchase at </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> at the most competitive prices.</> },
            ]
        },

        {
            id: 8,
            title: 'Parapet-Jali Design:5',
            img: '/parapet_jali_images/Parapet-jali-Design-05.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> is one of India’s fastest growing </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> companies in the industry.We were established in 1983 and are engaged in manufacturing and supplying  <strong>Parapet Boundary Walls</strong>. We offer a variety of designs, finishes, and sizes. The </>, type: 'text' },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> is ideal for fencing the areas surrounding structures so they have a stunning appearance. Professionals from our organization designed and built this wall using quality cement concrete and creative designs in accordance with overall processes. This </> },
                { text: <span> Parapet-Jali </span>, type: 'span', route: '/parapet_jali' },
                { text: <> can be purchased at  </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> for the most affordable prices</> },
            ]
        },
       
        {
            id: 9,
            title: 'Musalla Tiles',
            img: '/parapet_jali_images/musalla-tiles.jpg',
            description:[
                { text: <> Musalla Tiles available at </>},
                { text: <span>Harmain Traders. </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },


            ] 
        }

    ],
    reducers: {
        All_parapet_jali: (state, action) => {
            state = action.payload;
        }
    }
})
export const All_Parapet_jali_Action = All_parapet_jali_slice.actions;