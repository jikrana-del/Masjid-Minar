import React, { use } from 'react'
import style from '../../../css/Minar.module.css'
import gumbad from '../images/Gumbad.png'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from 'react-redux';
import { uniqeParapetAction } from '../../../Store/uniqe_Parapet_Jali_slice';
import { m } from 'framer-motion';
function Parapet_jali() {
  const dispatch = useDispatch()
  const Parapet_Jali_Img = ['parapet-boundry-wall.jpg', 'masjid-shahi-boundry.jpg', 'parapet-jali1.jpg', 'parapet-jali.jpg', 'Parapet-jali-Design-01.jpg', 'Parapet-jali-Design-02.jpg', 'Parapet-jali-Design-03.jpg', 'Parapet-jali-Design-04.jpg', 'Parapet-jali-Design-05.jpg']
  const Parapet_Jali = ['Parapet Boundary Wall', 'Shahi Boundary', 'Small Parapet-Jali', 'Medium Size Parapet Jali', 'Parapet-Jali Design:1', 'Parapet-Jali Design:2', 'Parapet-Jali Design:3', 'Parapet-Jali Design:4', 'Parapet-Jali Design:5',]
  const All_Parapet_Data = useSelector(store => store.AllParapetJali);
  console.log(All_Parapet_Data);
  const HendelData = (index, title) => {
    // console.log(All_Parapet_Data[index]);
    const FilterData = All_Parapet_Data.filter(item => item.title === title)
    dispatch(uniqeParapetAction.uniqeParapetData(FilterData));
  }

  const makeSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')   // spaces → dash
      .replace(/:/g, '')      // remove colon
      .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
  };
     const HendelParapet = ( title) => {
          const filterParapetData = All_Parapet_Data.filter(item => item.title == title)
          console.log(filterParapetData);
          dispatch(uniqeParapetAction.uniqeParapetData(filterParapetData))
      }

  return (
    <>
      <section>
        <section className={style.minar_section}>
          <div className={`${style.minar_contain} flex max-width `}>
            <div className='animate__zoomIn animate__animated'>
              <img src={gumbad} alt="Gumbad" />
            </div>
            <div className='animate__fadeInRight animate__animated'>
              <h1>Parapet Jali </h1>
              <p> <a href="https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local"><strong>Harmain Traders </strong> </a> Manufacturing All Type parapet Jali  <NavLink to={`/product/parapet-jali/${makeSlug('Parapet Boundary Wall')}`} onClick={() => HendelParapet('Parapet Boundary Wall')}><strong>Parapet Boundary Wall,</strong> </NavLink> parapet Jali , <NavLink to={`/product/parapet-jali/${makeSlug('Medium Size Parapet Jali ')}`} onClick={() => HendelParapet('Medium Size Parapet Jali')}> <strong>Medium size parapet Jali </strong> </NavLink> , <NavLink to={`/product/parapet-jali/${makeSlug(' Small Parapet-Jali')}`} onClick={() => HendelParapet('Small Parapet-Jali')}><strong>Small parapet Jali</strong></NavLink>. The parapet Jali is very effective and made for use in mosquse and other pleases.</p>
              <button>Contact - US</button>
            </div>
          </div>
        </section>
        <section className={`${style.MinarSizeImg} flex max-width`}>
          {Parapet_Jali_Img.map((img, idx) => {
            return <div key={idx}>
              <NavLink to={`/product/parapet-jali/${makeSlug(Parapet_Jali[idx])}`} onClick={() => HendelData(idx, Parapet_Jali[idx])}>
                <div className={`${style.contain} flex`} data-aos="fade-up" >
                  <img src={`/parapet_jali_images/${img}`} width='100%' alt="" title='Click Me' />
                  <button>{Parapet_Jali[idx]}</button>
                </div>
              </NavLink>
            </div>
          })}
        </section>
      </section>
    </>
  )
}

export default Parapet_jali