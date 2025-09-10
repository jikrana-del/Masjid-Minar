import { createSlice } from "@reduxjs/toolkit";


const makeSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')   // spaces → dash
        .replace(/:/g, '')      // remove colon
        .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
};

export const MinarDataSlice = createSlice({
    name: 'minarData',
    initialState: [
        {
                    id: 0,
                    size: 2,
                    title: '2 FEET MINAR',
                    img: '/Minar_sizes_images/2-feet-masjid-minar-300x452.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across entire India.We are skilled in manufacturing and supplying premium quality <strong>  2  Feet Minar </strong> in many designs, colors, and finishes. Our experienced team of specialists designed and constructed. At </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> uses excellent quality concrete cement and pioneering techniques in adherence with trending designs of the market. Furthermore,offer this  <strong> 2 Feet Minar </strong> at the most reasonably priced products and take less time for fittings. We also caterers different products like</> },
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
                    size: '3-5',
                    title: '3.5 FEET MINAR',
                    img: '/Minar_sizes_images/3.5-feet-masjid-minar-300x452.jpg',
                    description: [
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <> is one of the renowned manufacturers of </>, type: 'text' },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <> across entire India.We are skilled in manufacturing and supplying premium quality <strong>  3.5  Feet Minar </strong> in many designs, colors, and finishes. Our experienced team of specialists designed and constructed. At </> },

                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <> uses excellent quality concrete cement and pioneering techniques in adherence with trending designs of the market. Furthermore, We are now an </> },
                        { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                        { text: <> since <strong>1983 </strong> and offer this <strong> 3.5 Feet Minar </strong>  as the most reasonably priced product and take less time for fittings. We also caterers different products like </> },
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
                    size: 5,
                    title: '5 FEET MINAR',
                    img: '/Minar_sizes_images/5-feet-masjid-minar-300x455.jpg',
                    description: [
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <>  have been the quickest growing   </>, type: 'text' },
                        { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                        { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <> across India.We manufacture and furnish   <strong>5 Feet and 7.5 Feet Minar </strong>   broadly treasured due to their mesmerizing compositions and glamorous looks. </>, type: 'text' },
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <>  is designed and assembled by utilizing premium quality reinforced concrete cement and cutting-edge methodology with set quality standards. Provided </>},
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <>  across India is used to installed atop the <strong> 5 Feet and 7.5 Feet Minar </strong> </> },
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <> are available for clients in several designs and finish to suit the precise demands of clients. Our products are the most reasonably priced and take less time for fittings.</>},
                       
                    ]
                },
                {
                    id: 3,
                    size: 6,
                    title: '6 FEET MINAR',
                    img: '/Minar_sizes_images/6-feet-masjid-minar-300x456.jpg',
                    description: [
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <> is one of the renowned manufacturers of </>, type: 'text' },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <> across entire India.We are skilled in manufacturing and supplying premium quality <strong> 6 Feet Minar </strong> in many designs, colors, and finishes. Our experienced team of specialists designed and constructed. At </>},
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <> uses excellent quality concrete cement and pioneering techniques in adherence with trending designs of the market. Furthermore, We are now an </>},
                        { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                        { text: <> since <strong>1983 </strong> and offer this <strong> 6 Feet Minar </strong>  as the most reasonably priced product and take less time for fittings. We also caterers different products like </> },
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
                    size: 8,
                    title: '8 FEET MINAR',
                    img: '/Minar_sizes_images/8-feet-masjid-minar-300x451.jpg',
                    description: [
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <>  have been the quickest growing   </>, type: 'text' },
                        { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                        { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <> across India.We specialize in manufacturing this  <strong>8 Feet Minar </strong>  attractive designer pattern also</>, type: 'text' },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <>  is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools.Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design.Clients can purchase this <strong>8 Feet Minar </strong>   from us in cores of designs, colors, and finishes at the most reasonable prices. We also caterers different products like </> },
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
                    size: 11,
                    title: '11 FEET MINAR',
                    img: '/Minar_sizes_images/11-feet-masjid-minar-300x450.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have manufactured and furnished  <strong> 11 Feet Minar considerably treasured due to its interesting configurations and exquisite looks. These </strong>   </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India is designed and constructed by utilizing premium quality supported concrete cement and state-of-the-art methodology with set quality standards. Supplied minar is used to installed atop the <strong>mosques </strong> for improving their religious values. The offered <strong>  11 Feet Minar </strong>  is available for clients in several designs and finishes to suit clients’ specific requests.We also caterers different products like </> },
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
                    size: 12,
                    title: '12 FEET MINAR',
                    img: '/Minar_sizes_images/12-feet-masjid-minar-300x450.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have manufactured and furnished  <strong>10 , 11, and 12 Feet Minar considerably treasured due to its interesting configurations and exquisite looks. These </strong>   </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India is designed and constructed by utilizing premium quality supported concrete cement and state-of-the-art methodology with set quality standards. Supplied minar is used to installed atop the <strong>mosques </strong> for improving their religious values. The offered <strong> 10, 11,and 12 Feet Minar </strong>  is available for clients in several designs and finishes to suit clients’ specific requests.We also caterers different products like </>},
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
                    size: 14,
                    title: '14 FEET MINAR',
                    img: '/Minar_sizes_images/14-feet-masjid-minar-300x450.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>  across India. This <strong> 14 Feet Minar </strong>  has widely demanded installation at mosques to enhance their magnificence and designer looks. We decorate the mosques with the best quality materials to beautify the ambience and soulful at the same time. The famous and well-known company with products and sells a reasonable price and takes less time for fittings. We offer this <strong>14 Feet Minar </strong>   to the clients in various designs, colors, and finishes at the most competitive prices. We also caterers different products like </>, type: 'text' },
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
                    size: 16,
                    title: '16 FEET MINAR',
                    img: '/Minar_sizes_images/16-feet-masjid-minar-300x451.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> is one of the renowned manufacturers of </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across entire India.We are skilled in manufacturing and supplying premium quality <strong> 16 Feet Minar </strong> in many designs, colors, and finishes. Our experienced team of specialists designed and constructed. At </> },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> uses excellent quality concrete cement and pioneering techniques in adherence with trending designs of the market. Furthermore, We are now an </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong>1983 </strong> and offer this <strong> 16 Feet Minar </strong>  as the most reasonably priced product and take less time for fittings. We also caterers different products like </> },
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
                    size: 17,
                    title: '17 FEET MINAR',
                    img: '/Minar_sizes_images/17-feet-masjid-minar-300x451.jpg',
                    description: [
                        { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                        { text: <>  are Professional in manufacturing and supply premium quality  <strong> 17 Feet Minar Manufacturer </strong> unrestricted with us in many designs, colours, and finishes. Our skilful team of professionals designed and constructed these</>, type: 'text' },
                        { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                        { text: <>  using excellent quality reinforced concrete cement and pioneering techniques in adherence with trending designs of the market.We are now an  </> },
                        { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                        { text: <>  since 1983. It is used for mounting over the dome of mosques to enhance their religious values, and pleading looks. Furthermore, we offer this <strong> 17 Feet Minar </strong>   at the most competitive prices to the clients.We also caterers different products like  </>},
                        { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                        { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                        { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                        { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                        { text: ' And ' },
                        { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

                    ]
                },
        {
                    id: 10,
                    size: 18,
                    title: '18 FEET MINAR',
                    img: '/Minar_sizes_images/18-feet-masjid-minar-300x454.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> trendy designed  <strong>18 Feet Minar </strong> has gained wide appreciation among our consumers since our inception in  <strong>1983.</strong> The offered  </>, type: 'text' },
                { text: <span>ready-made RCC Minars for masjids </span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> is exclusively designed and constructed under the supervision of our adroit professionals with the help of advanced techniques and pristine quality reinforced concrete cement.This </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>  is considered ideal for atop installation at mosques owing to its superb finish and alluring design.Furthermore, We are now an </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> and offer this <strong>18 Feet Minar </strong> as the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },
        {
                    id: 11,
                    size: '20-5',
                    title: '20.5 FEET MINAR',
                    img: '/Minar_sizes_images/20-feet-masjid-minar-300x452.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India.We specialize in manufacturing this <strong> 20.5 Feet Minar </strong> at </>, type: 'text' },
                { text: <span>Harmain Trader's </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> design, colours, and finishes. Our skilful team of experts designed and constructed these </> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>   using excellent quality reinforced concrete cement and pioneering techniques in compliance with trending designs of the market.It is used for mounting over the dome of mosques to improve their religious values and pleading looks.Similarly, we offer this  <strong>20.5 Feet Minar ,</strong> at the most competitive prices to the clients. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
                },
        {
                    id: 12,
                    size: '22',
                    title: '22 FEET MINAR',
                    img: '/Minar_sizes_images/22-feet-masjid-minar-300x454.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across IndiaWe are skilled in  <strong> manufacturing</strong>  and supplying <strong> premium quality 22 Feet Minar </strong> at </>, type: 'text' },
                { text: <span>Harmain Trader's </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> design, colours, and finishes. Our skilful team of experts designed and constructed these </>},
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>   using excellent quality reinforced concrete cement and pioneering techniques in compliance with trending designs of the market.It is used for mounting over the dome of mosques to improve their religious values and pleading looks.Similarly, we offer this  <strong>22 Feet Minar ,</strong> at the most competitive prices to the clients. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },
        {
                    id: 13,
                    size: '23',
                    title: '23 FEET MINAR',
                    img: '/Minar_sizes_images/23-feet-300x451.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India. We are skilled in  <strong> manufacturing</strong>  and supplying <strong> premium quality 23 Feet Minar </strong>   attractive designer pattern also </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>  is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools.Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design.Clients can purchase this  <strong>23 Feet Minar </strong> from us in cores of designs, colours, and finishes at the most reasonable prices. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },
        {
                    id: 14,
                    size: '25',
                    title: '25 FEET MINAR',
                    img: '/Minar_sizes_images/25-feet-aman-masjid-minar-300x453.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India. We are skilled in  <strong> manufacturing</strong>  and supplying <strong> premium quality 25 Feet Minar </strong>   attractive designer pattern also </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>  is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools.Further, quality inspectors strictly check it on defined qualitative parameters to ensure its flawless design.Clients can purchase this  <strong>25 Feet Minar </strong> from us in cores of designs, colours, and finishes at the most reasonable prices. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
        },

        {
                    id: 15,
                    size: '28',
                    title: '28 FEET MINAR',
                    img: '/Minar_sizes_images/28-feet-aman-masjid-minar-300x452.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India. We are skilled in  <strong> manufacturing</strong>  and supplying <strong> premium quality 28 Feet Minar </strong>  that is available in many designs, colours, and finishes. Our dexterous team of professionals designed and constructed. </>, type: 'text' },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  uses excellent quality reinforced concrete cement and pioneering techniques in adherence with trending designs of the market. It is used for mounting over the dome of <strong>mosques </strong> to enhance their religious values, and pleading looks. Furthermore, we offer this  <strong>28 Feet Minar </strong> at the most competitive prices to the clients. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },
        {
                    id: 16,
                    size: '30',
                    title: '30 FEET MINAR',
                    img: '/Minar_sizes_images/30-feet-aman-masjid-minar-300x454.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  have been the quickest growing   </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> since <strong> 1983 </strong>  in Manufacturer</>},
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across India. We are skilled in  <strong> manufacturing</strong>  and supplying <strong> premium quality 30 Feet Minar </strong>  that is available in many designs, colours, and finishes. Our dexterous team of professionals designed and constructed. </>, type: 'text' },
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <>  uses excellent quality reinforced concrete cement and pioneering techniques in adherence with trending designs of the market. It is used for mounting over the dome of <strong>mosques </strong> to enhance their religious values, and pleading looks. Furthermore, we offer this  <strong>30 Feet Minar </strong> at the most competitive prices to the clients. We also caterers different products like </>},
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },
        {
                    id: 17,
                    size: '32',
                    title: '32 FEET MINAR',
                    img: '/Minar_sizes_images/32-feet-300x452.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type: 'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> trendy designed  <strong>32 Feet Minar </strong> has gained wide appreciation among our consumers since our inception in  <strong>1983.</strong> The offered  </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> is exclusively designed and constructed under the supervision of our adroit professionals with the help of advanced techniques and pristine quality reinforced concrete cement.This </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>  is considered ideal for atop installation at mosques owing to its superb finish and alluring design.Furthermore, We are now an </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> and offer this <strong>32 Feet Minar </strong> as the most reasonably priced products and take less time for fittings. We also caterers different products like </> },               
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },
        {
                    id: 18,
                    size: '35',
                    title: '35 FEET MINAR',
                    img: '/Minar_sizes_images/35-feet-300x449.jpg',
            description: [
                { text: <span>Harmain Traders </span>, type:'span', Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text:     <> trendy designed  <strong>35 Feet Minar </strong> has gained wide appreciation among our consumers since our inception in  <strong>1983.</strong> The offered  </>,  type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> is exclusively designed and constructed under the supervision of our adroit professionals with the help of advanced techniques and pristine quality reinforced concrete cement.This </>, type: 'text' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>  is considered ideal for atop installation at mosques owing to its superb finish and alluring design.Furthermore, We are now an </>, type: 'text' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> and offer this <strong>35 Feet Minar </strong> as the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },

        {
                    id: 19,
                    size: '40',
                    title: '40 FEET MINAR',
                    img: '/Minar_sizes_images/40-feet-300x454.jpg',
            description: [
                { text: <span>Harmain Traders </span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: ' are one of the renowned manufacturers of ' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <> across entire India. We are skilled in manufacturing and supplying premium quality <strong>40 Feet Minar </strong> in many designs, colors, and finishes. Our experienced team of specialists designed and constructed. At  </>},
                { text: <span>Harmain Traders </span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> , RCC minar uses excellent quality concrete cement and pioneering techniques in adherence with trending designs of the market. Furthermore, We are now an </>},
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> . since 1983 and offer this  <strong>40 Feet Minar </strong>  at the most reasonably priced products and take less time for fittings. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
                },

        {
            id: 20,
            size: '42',
            title: '42 FEET MINAR',
            img: '/Minar_sizes_images/42-feet-300x452 (1).jpg',
            description: [
                { text: <span>Harmain Traders </span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: ' are now an ' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: ' Our Aim Is To Provide Premium Quality, the Most suitable Design, And Easy Build Material To Make The' },
                { text: <>.   and in leading position in the market, we are committed to offer  <strong>40 Feet Madani Minar</strong>, It is specifically designed for fixing at the canopy of mosques to enhance its divine aspects. Mapped Out and built with the full utilization of superior quality reinforced concrete types of cement. The <strong>  40 Feet Madani Minar</strong>  is also certified to assure its dimensional stability. Furthermore, we offer the  <strong> 40 Feet Madani Minar</strong> to the clients in various styles and finishes at budget prices. We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },

            ]
        },

        {
            id: 21,
            size: '44',
            title: '44 FEET MINAR',
            img: '/Minar_sizes_images/44-feet-aman-masjid-minar-300x454 (1).jpg',
            description: [
                {
                    text:
                        <> We have been the quickest growing <strong>ISO-certified company</strong> since <strong>1983 </strong> in <strong>Manufacturer ready-made RCC Minars </strong> for <strong>masjids</strong> across India. We specialize in manufacturing this <strong>44 Feet Minar</strong> attractive designer pattern also <strong>RCC minar</strong> is designed and constructed by utilizing excellent quality reinforced concrete cement with the help of advanced tools . Further, quality  inspectors strictly check it on defined qualitative parameters to ensure its flawless design. Clients can purchase this <strong>44 Feet Minar</strong> from us in cores of designs, colors, and finishes at hte most reasonable prices.</>
                }

            ]

            ,
        },
        {
            id: 22,
            size: '50',
            title: '50 FEET MINAR',
            img: '/Minar_sizes_images/50-feet-masjid-minar-300x452 (1).jpg',
            description: [
                {
                    text:
                        <> We have been the quickest growing <strong>ISO-certified company</strong> since <strong>1983 </strong> in <strong>Manufacturer ready-made RCC Minars </strong> for <strong>masjids</strong> across India. We specialize in manufacturing this <strong>50 Feet Minar</strong> at <strong>Aman Minar's</strong> designed, colors, and finishes. Our skillful team of experts designed and constructed this <strong>RCC Minar</strong> using excellent quality reinforced concrete cement and pioneering techniques in compliance with trending designs of the market. It is used for mounting over the dome of <strong>mosques </strong>to improve their religious values and pleading looks. Similarly, We offer this <strong>50 Feet minar,</strong> at the most competitive prices to the clients. </>
                },
            ]
        },
        {
            id: 22,
            size: '60',
            title: '60 FEET MINAR',
            img: '/Minar_sizes_images/60-feet-300x458 (1).jpg',
            description: [
                { text: <span>Harmain Traders</span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: 'had started in 1983 ever since been the quickest growing' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: ' Our Aim Is To Provide Premium Quality, the Most suitable Design, And Easy Build Material To Make The' },
                { text: <><strong>Masjid </strong> Looks Alhamdulillah. <strong>60 Feet Minar</strong>  is available in many designs, colours, and finishes. Our expert team of professional workers Is On Our Way To manufacturing and supplying The Best Of All <strong> Minars </strong> in Any Part Of India. The</> },
                { text: <span> Harmain Traders </span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> is the manufacturer of minar products. Our clients can avail themselves of this Prefabricated pillar. Furthermore, we offer this <strong>60 Feet Minar </strong> at the most competitive prices to the clients. We also caterers different products like</> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]

        },
        {
            id: 23,
            size: '70',
            title: '70 FEET MINAR',
            img: '/Minar_sizes_images/70-feet-300x451 (1).jpg',
            description: [
                { text: <span>Harmain Traders </span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> trendy designed  <strong>70 Feet Minar </strong> has gained wide appreciation among our consumers since our inception in <strong>1983</strong>.The offered   </> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: 'is exclusively designed and constructed under the supervision of our adroit professionals with the help of advanced techniques and pristine quality reinforced concrete cement. This' },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: 'is considered ideal for atop installation at mosques owing to its superb finish and alluring design. Furthermore, We are now an ' },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <> and offer this <strong>70 Feet Minar </strong> at the most reasonably priced products and take less time for fittings.We also caterers different products like </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]
        },
        {
            id: 24,
            size: '90',
            title: '90 FEET MINAR',
            img: '/Minar_sizes_images/90-feet-300x452 (1).jpg',
            description: [
                { text: <span>Harmain Traders </span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: <> have been the quickest growing </> },
                { text: <span> <strong> ISO-certified company </strong> </span>, Link: 'https://en.wikipedia.org/wiki/ISO_9000_family' },
                { text: <>since <strong>1983 </strong> in <strong>Manufacturer </strong></> },
                { text: <span> <strong> ready-made RCC Minars for masjids </strong></span>, type: 'span', route: '/masjid-rcc-minar' },
                { text: <>for <strong>masjids. </strong> We are skilled in manufacturing and supplying <strong>premium quality 90 Feet Mina</strong> that is available in many designs, colors, and finishes. Our dexterous team of professionals designed and constructed.</> },
                { text: <span>Harmain Traders</span>, Link: 'https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local' },
                { text: < > uses excellent quality reinforced concrete cement and pioneering techniques in adherence with trending designs of the market. It is used for mounting over the dome of mosques to enhance their religious values, and pleading looks. Furthermore, we offer this <strong>90 Feet Minar</strong> at the most competitive prices to the clients.We also caterers different products like  </> },
                { text: <span> Minars ,</span>, type: 'span', route: "/product/masjid-rcc-minar" },
                { text: <span> Gumbad ,</span>, type: 'span', route: '/product/gumbad' },
                { text: <span> Marble Member </span>, type: 'span', route: '/product/marble_minar' },
                { text: <span> Parapet Jali  </span>, type: 'span', route: '/product/parapet_jali' },
                { text: ' And ' },
                { text: <span>RCC Mimber</span>, type: 'span', route: `/product/${makeSlug('rcc minar')}` },
            ]

        }
    ].reverse(),

    reducers: {
        minarData: (state, action) => {
            state = action.payload;
        }
    }

})
export const MinarDataAction = MinarDataSlice.actions;