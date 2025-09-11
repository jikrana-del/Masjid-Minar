import React from 'react'
import style from '../../../css/Minar.module.css'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from "lucide-react";
function Musalla_Tiles() {
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')  
            .replace(/:/g, '')      
            .replace(/[^a-z0-9-]/g, ''); 
    };
    return (
        <section key={10}>
            <section className={`${style.Header}`}>
                <div>

                    <NavLink to='/'>Home / </NavLink>
                    <NavLink to={`/product-category/Musalla/musalla-tiles`}>Uncategorized / </NavLink>
                    <span>Musalla Tiles</span>
                </div>
            </section>
            <section >
                <div className={`${style.minar} flex max-width`}>
                    <div className={style.img_zoom}>
                        <InnerImageZoom
                            src={`${import.meta.env.BASE_URL}parapet_jali_images/musalla-tiles.jpg`}         
                            zoomSrc={`${import.meta.env.BASE_URL}parapet_jali_images/musalla-tiles.jpg`} 
                            zoomPreload={true} 
                            width='250px'
                            zoomType="hover" 
                            zoomScale={4}
                            className='animate__zoomIn animate__animated'
                        />
                    </div>
                    <div className={`${style.minar_feet_contain} flex animate__zoomIn animate__animated`}>
                        <h1>Musalla Tiles</h1>
                        <p>
                            Musalla Tiles available at 
                            <a href="https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local">  <span>Harmain Traders. </span></a> 
                        </p>
                        <NavLink to='/inquiry'><button className={`green_btn  flex`} >
                            <span>Send Inquiry</span>
                            <span> <ChevronRight size={20} className=' btn_show  btn_high' /></span>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default  Musalla_Tiles