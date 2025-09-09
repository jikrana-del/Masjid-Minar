import React from 'react'
import style from '../../css/Product.module.css'
import one from '../Product_component/images/Gumbad.png'
import two from '../Product_component/images/harmain-masjid-minar.png'
import three from '../Product_component/images/mahrab.png'
import four from '../Product_component/images/marble-jali-1.jpeg'
import five from '../Product_component/images/musalla-tiles.jpg'
import six from '../Product_component/images/Parapet-jali-aman-minar.png'
import seven from '../Product_component/images/RCC.jpg'
import eight from '../Product_component/images/Rcc-Mimber.jpeg'
import nine from '../Product_component/images/wuzu-stand.jpg'
import AOS from 'aos';


import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Product() {

  const Example_Product = [
    {
      src: two,
      Header: 'ReadyMade RCC Masjid Minar',
      descreption: (
        <>
          Offering Various sizes of <strong>RCC minars for mosque</strong> from 2 feet to 35 feet,
          Our <strong>ready made minars</strong> are designed with strong build and long life in all weather conditions.
        </>
      ),
      title: 'harmain-masjid-minar'
    },
    {
      src: six,
      Header: 'Parapet Boundary Wall',
      descreption: (
        <>
          We Provide beautifully designed <strong>Parapet jali (Parapet Boundry Wall for Masjid),</strong> including small, medium, and shahi styles, that enhance the look of  <strong>mosque boundaries</strong> with style and strength.
        </>
      ),

      title: 'parapet-jali-aman-minar'
    },
    {
      src: one,
      Header: 'Gumbad (Doms)',
      descreption: (
        <>
          At Harmain Minar <strong>Masjid domes (Gumbads)</strong> are carefuliy made to add beauty and heigh to any mosque. Our Gumbads are known for their quality finish and durability.

        </>
      ),
      title: 'about-harmain-best-masjid-minar'
    },
    {
      src: nine,
      Header: 'Wuzu Stand',
      descreption: (
        <>
          descreption: `We have <strong>Readymade Marble and RCC Wuzu stands</strong> are made for comfortable and clean ablution, with strong material and easy-to use design for daily use in mosques.
        </>
      )
      ,
      title: 'harmain-traders-wuzu-stand'
    },
    {
      src: four,
      Header: 'Marble Jali for Dargah',
      descreption:
        (
          <>
            We Provide high-quality <strong>marble jalis specially designed for Dargahs,</strong> Which adding beauty, strength, and a traditional look to the holy space.
          </>
        ),
      title: 'harmain precast industries-marble-jali-1'
    },
    {
      src: five,
      Header: 'Musalla Tiles',
      descreption: (
        <>
          Provides <strong>Musalla tiles (prayer Tiles)</strong> are designed for clean, soft ,and slip free prayer spaces, perfect for mosques and namaz areas.
        </>
      ),
      title: 'harmain musalla tiles'
    },
    {
      src: eight,
      Header: 'Mimber For Masjid',
      descreption: (
        <>
          Our <strong>Masjid mimbers</strong> are made strong and safe for giving Khutbahs (sermons). They are designed to match any mosque's look with a traditional style.
        </>
      ),
      title: 'harmain precast industries-RCC Mimber'
    },
    {
      src: three,
      Header: 'Mehrab  (Qibla)',
      descreption: (

        <>
          We make nice and strong  <strong>'Masjid Mehrabs' </strong> to <strong>show the qibla direction.</strong>  They look simple, clean,and add beauty to any mosque.
        </>
      ),
      title: 'harmain-minar-marble-product'
    },
    {
      src: seven,
      Header: 'RCC Products for Masjid',
      descreption: (
        <>
          Offering various sizes sizes from 2 feet to 35 feet, our ready-made minars are designed with precision and care to suit different architectural requirements.
        </>
      ),
      title: 'harmain precast industries-All-Masjid-RCC martials'
    },
    {
      src: three,
      Header: 'Marble Products For Masjid',
      descreption: (
        <>
          Crafted add Grandeur to mosque structures, our gumbads are known for their impeccable and durability.
        </>
      ),
      title: 'harmain-minar-marble-product'
    }
  ]



  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: false      // repeat animation on every scroll
    });
  }, []);

  useEffect(() => {
    AOS.refresh();     // required for React route changes
  }, []);
  return (
    <>
      <section className={style.product_containar}>
        <section className={`${style.product_section} flex`}>
          <div className={`${style.Product} max-width  flex`}>
            <h5>HARMAIN MINAR</h5>
            <h1>Masjid Minar Products in India</h1>
            <p><span>Harmain Minar</span>is a Top Rated <span>Masjid Products manufacturer and Supplier in India Specially in Mumbai and West India.</span>With High Quality,Strong,Beautiful, Affordable In Rate <span>RCC Masjid Minar,Mimber,Masjid Gumbad,Parapet Jali, Mehrab (Qibla)</span>and <span>Masjid Elevation Items,</span>Ets.</p>
          </div>
        </section>
        <section className={`${style.example_section} flex max-width`}>
          {Example_Product.map((product, idx) => {
            return <div key={idx} >
              <div className={style.example} data-aos="fade-up" >
                <img src={product.src} alt="" title={product.title} className='animate__zoomIn animate__animated' />
                <h1>{product.Header}</h1>
                <p>{product.descreption}</p>

              </div>
            </div>
          })}
        </section>
      
      
      </section>
    </>
  )
}

export default Product;