import React from 'react'
import gumbad from './images/masjid-gumbad.jpg'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import style from '../../css/Minar.module.css'
import { NavLink } from 'react-router-dom';
import { ChevronRight } from "lucide-react";

function Gumbad() {
  const makeSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')   // spaces → dash
      .replace(/:/g, '')      // remove colon
      .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
  };
  return (
    <section >
      <section className={`${style.Header}`}>
        <div>
          <NavLink to='/'>Home / </NavLink>
          <NavLink to={`/product-category/Musalla/musalla-tiles`}>Uncategorized / </NavLink>
<span>Gumbad</span>
        </div>
      </section>
      <section >
        <div className={`${style.minar} flex max-width`}>
          <div className={style.img_zoom}>
            <InnerImageZoom
              src={gumbad}          // normal image
              zoomSrc={gumbad} // high-res image for zoom
              zoomPreload={true} // zoom image pehle load ho jayegi
              width='250px'
              zoomType="hover"  // hover ya click use kar sakte ho
              className='animate__zoomIn animate__animated'
            />
          </div>
          <div className={`${style.minar_feet_contain} flex animate__fadeInRight animate__animated`}>
            <h1>Gumbad</h1>
            <div className='hr'></div>
           
              <p>
                          <a href="https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local">  <span>Harmain Traders </span></a> 
              uses superior quality reinforced concrete cement and novel techniques in accordance with trending designs of the market. It is used for setting up over the dome of mosques to increase their religious values and impressive looks. Furthermore,
              <a href="https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local">  <span>Harmain Traders </span></a> 
              offer this <strong>Gumbad</strong> at the most competitive prices to the clients. We also caterers different products like

                           {/* <strong>have been the quickest growing, Consumer-centric, and  <a href="https://en.wikipedia.org/wiki/ISO_9000_family"><span>ISO- certified company </span></a> since 1983 in Manufacturer  <NavLink to='/masjid-rcc-minar'> <span>ready-made RCC Minars for masjids </span> </NavLink> across India.</strong> We are providing a wide range of <strong>Wuzu Stand </strong>to our Clients. an exclusive collection of our offered range of products is acclaimed by the clients for its traditional looks as well as outstanding finishing. Being  one of one prominent <strong>manufacturers </strong>and <strong>suppliers</strong>, we male use of superior quality material for designing. <strong>Wuzu Stand </strong>are also customized,according to the client's needs at affordable rates. We also caterers different products Like */}
                          <NavLink to='/product/masjid-rcc-minar'> <span> Minars</span> </NavLink>  , <NavLink to='/product/gumbad'><span>Gumbad</span></NavLink>  , <NavLink to='/product/marble_minar'><span>Marble , Wuzu Stand</span></NavLink> , <NavLink to='/product/parapet_jali'> <span>Parapet jali</span></NavLink> And, <NavLink to={`/product/${makeSlug('rcc minar')}`}> <span>RCC Mimdber</span></NavLink>
            
                        </p>
            <NavLink to='/inquiry'><button className={`green_btn  flex`} >
              <span>Send Inquiry</span>
              <span> <ChevronRight size={20} className=' btn_show  btn_high' /></span>
            </button></NavLink>

          </div>
        </div>
      </section>
    </section>
  )
}

export default Gumbad