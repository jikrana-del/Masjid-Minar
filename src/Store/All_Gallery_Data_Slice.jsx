import { createSlice } from "@reduxjs/toolkit";
const makeSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')   // spaces → dash
        .replace(/:/g, '')      // remove colon
        .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
};

export const AllGalleryDataSlice = createSlice({
    name: 'AllGalleryData',
    initialState: [

        {
            id: 0,
            title: 'All Masjid Product',
            img: '/Gallery_images/All-Masjid-Parts-300x224.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>   brings you a complete range of <strong>Masjid Products</strong> under one roof. Since <strong>1983</strong>, we have been manufacturing and supplying ready-made  </>, type: 'text' },
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <> is considered ideal for atop installation at <strong>mosques</strong>  owing to its superb finish and alluring design. Furthermore, We are now an </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>  and offer this  <strong>High-quality Minar </strong>  at the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
                
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
            title: 'High Quality Minar',
            img: '/Gallery_images/high-quality-minar-300x230.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>   trendy designed <strong> High-Quality Minar </strong>  has gained wide appreciation among our consumers since our inception in <strong>1983</strong>. The offered <strong>RCC Minar </strong> is exclusively designed and constructed under the  <strong>supervision </strong> of our adroit professionals with the help of advanced techniques and pristine quality reinforced concrete cement. This </>, type: 'text' },
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <> is considered ideal for atop installation at <strong>mosques</strong>  owing to its superb finish and alluring design. Furthermore, We are now an </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>  and offer this  <strong>High-quality Minar </strong>  at the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
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
            title: 'Khubsurat Minar',
            img: '/Gallery_images/khubsurat-minar-300x227.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>since 1983 in <strong>Manufacturer </strong></> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> for <strong>masjids </strong>  across India. We specialize in <strong>manufacturing </strong> this <strong> khubsurat-Minar </strong>attractive designer pattern also </> },
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <>  is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools.Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design.Clients can purchase this  <strong>  khubsurat-Minar </strong> from us in cores of designs, colors, and finishes at the most reasonable prices. We also caterers different products like</> },
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
            title: 'Lighting Minar',
            img: '/Gallery_images/Lighting-Minar-khubsurat-Minar-300x228.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>   is one of the renowned <strong>manufacturers </strong> of <strong>ready-made </strong>  </>, type: 'text' },
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <> for <strong>masjids </strong>  across entire India. We are skilled in <strong>manufacturing </strong> and <strong>supplying premium quality Lighting Minar </strong>  in many designs, colors, and finishes. Our experienced team of specialists designed and constructed. At </>},
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> <strong>RCC minar </strong>  uses excellent quality concrete cement and pioneering techniques in adherence with trending designs of the market. Furthermore, We are now an </>},
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since 1983 and offer this  <strong>Lighting Minar </strong>  at the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
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
            title: 'Madni Minar',
            img: '/Gallery_images/Madani-Minar-300x233.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>since 1983 in <strong>Manufacturer </strong></> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> for <strong>masjids </strong>  across India. We specialize in <strong>manufacturing </strong> this <strong> Madni Minar </strong>attractive designer pattern also </> },
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <>  is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools.Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design.Clients can purchase this  <strong>  Madni Minar </strong> from us in cores of designs, colors, and finishes at the most reasonable prices. We also caterers different products like</> },
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
            title: 'Makki Minar',
            img: '/Gallery_images/makki-minar-300x235.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>   is one of the leading manufacturers of  </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> for mosques throughout India. </>},
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> manufactures and supplies <strong> Makki Minar </strong>  in a variety of colors, designs, and finishes. A team of dexterous professionals design and construct quality </>},
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <> using superior concrete cement and pioneering techniques based on the newest market trends.</> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> uses excellent reinforced concrete cement and pioneering techniques to provide market-leading designs. Makki Minar is offered to the client at the most competitive price. Moreover, we are now an </>},
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since 1983 , providing this  <strong>Makki Minar </strong>  at the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
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
            title: 'Minar Block',
            img: '/Gallery_images/minar-block.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>since 1983 in <strong>Manufacturer </strong></> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> for <strong>masjids </strong>  across India. We specialize in <strong>manufacturing </strong> this <strong> Minar Block </strong>attractive designer pattern also </> },
                { text: <span> RCC  Minar ,</span>, type: 'span', route: "/masjid-rcc-minar" },
                { text: <>  is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools.Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design.Clients can purchase this  <strong> Minar Block </strong> from us in cores of designs, colors, and finishes at the most reasonable prices. We also caterers different products like</> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 7,
            title: 'Mosque Minar-Masjid ke Minar',
            img: '/Gallery_images/mosque-minar-all2-300x151.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>since 1983 in <strong>Manufacturer </strong></> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> for <strong>masjids </strong>  across India. We specialize in <strong>manufacturing </strong> this <strong>  Mosque Minar  </strong>at </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  designed, colors, and finishes. Our skillful team of experts designed and constructed this <strong>RCC Minar </strong> using excellent quality reinforced concrete cement and pioneering techniques in compliance with trending designs of the market. It is used for mounting over the dome of mosques to improve their religious values and pleading looks. Similarly, we offer this <strong>Mosque Minar</strong> , at the most competitive prices to the clients. We also caterers different products like</>},
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 8,
            title: 'Shandar Minar',
            img: '/Gallery_images/Shandar-Minar-300x232.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> have started in <strong> 1983 </strong> , ever since it’s been the quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>  We are Presenting <strong> Shandar-Minar </strong> at </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  designed, colors, and finishes. Our skillful team of experts designed and constructed this <strong>RCC Minar </strong> using excellent quality reinforced concrete cement and pioneering techniques in compliance with trending designs of the market. It is used for mounting over the dome of mosques to improve their religious values and pleading looks. Similarly, we offer this <strong>Shandar-Minar</strong> , at the most competitive prices to the clients. We also caterers different products like</> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 9,
            title: 'Strong Minar',
            img: '/Gallery_images/strong minar.avif',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing  </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>since 1983 in <strong>Manufacturer </strong></> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> for <strong>masjids </strong>  across India. We specialize in <strong>manufacturing </strong> this <strong>  Strong Minar  </strong> attractive designer pattern also <strong>RCC Minar </strong> is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools. Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design. Clients can purchase this <strong> Strong Minar </strong> from us in cores of designs, colors, and finishes at the most reasonable prices. We also caterers different products like </> },  
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        }
    ],
    reducers: {
        GalleryData: (state, action) => {
            return action.payload;
        }
    }

})
export const AllGalleryDataAction = AllGalleryDataSlice.actions;