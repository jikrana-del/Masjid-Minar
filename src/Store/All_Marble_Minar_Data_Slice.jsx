import { createSlice } from "@reduxjs/toolkit";
const makeSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')  
        .replace(/:/g, '')    
        .replace(/[^a-z0-9-]/g, ''); 
};

export const All_Marble_Minar_Slice = createSlice({
    name: "AllMarbleMinar",
    initialState: [
        {
            id: 0,
            title: 'Marble Mimber',
            img: '/Marble_mimber_images/marble-mimber.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <strong>  have been the quickest growing, Consumer-centric, and   </strong>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India. <strong>Wuzu </strong> has <strong>material </strong>and <strong>  spiritual benefits.</strong> It is an essential part of purity and cleanliness in Islam before performing worship. It follows a process to wash hands, mouth, nostrils, arms, face, ears, hair, and feet. The <strong>Ceramic Wuzu Bethak </strong>is made available for use in various religious places. It is a unique cleaning performed by washing the face, arms, and feet and wiping the head. The  <strong>Ceramic WUZU Bethak </strong> is very safe for use. We also caterers different products like</> },
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
            title: 'Wuzu Stand',
            img: '/Marble_mimber_images/harmain-traders-wuzu-stand.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>have been the quickest growing prominent <strong>manufacturers </strong> and <strong>suppliers</strong>, we make use of the superior quality material for designing, we are providing a wide range of <strong>Wuzu Stand </strong> to our clients. We are now an </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>   and have an exclusive collection of our offered range of products that are acclaimed by the clients for their traditional looks as well as outstanding finishing. <strong>Wuzu Stand </strong> are also customized, according to the client’s needs at affordable rates. We also caterers different products like </> },
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
            title: 'Masjid-Marble-Mehrab',
            img: '/Marble_mimber_images/masjid-marble-mehrab.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>have provided a wide range of <strong>Wuzu Stand </strong> to our clients. We are now an </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>   and have an exclusive collection of our offered range of products that are acclaimed by the clients for their traditional looks as well as outstanding finishing. . Being one of the prominent <strong>manufacturers </strong> and suppliers, we use superior quality materials for designing. <strong>Wuzu Stand </strong> customized our stands according to the client’s needs at affordable rates. We also caterers different products like </> },
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
            title: 'Marble Jali for Dargah',
            img: '/Marble_mimber_images/marble-jali-for-dargah.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> is one of the renowned manufacturers quickest growing </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>.Established in 1983, we are engaged in <strong>manufacturing and supplying Marble Jali For Dargah.</strong>  Available in several designs, finishes, and sizes. This  <strong>Marble Jali </strong>  is ideal for fencing the areas around the structures to provide them with stunning looks. Our Proficient professionals have designed and constructed this wall with  <strong>Quality assurance </strong>  cement concrete and creative designs in conformance with overall processes. At </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>,  customers can purchase this <strong>Marble Jali </strong> at the most affordable rates. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 4,
            title: 'Marble Qibla and Mimber',
            img: '/Marble_mimber_images/Marble-Qibla-and-member.jpg',
            description: [
                {
                    text:
                        <>
                            <ul>
                                <li>Enhanced design Marble</li>
                                <li>OPtimum durability</li>
                                <li>Exact dimension Height  <strong>50</strong>  Inch</li>
                                <li>Length <strong>46</strong></li>
                                <li>Width <strong>35 </strong> Inch</li>
                            </ul>
                        </>
                }
            ]

        }
    ],
    reducers: {
        All_Marble_Minar_Data: (state, action) => {
            return action.payload;
        }
    }
})
export const AllMarbleMinarAction = All_Marble_Minar_Slice.actions;