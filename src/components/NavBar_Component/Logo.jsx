import { useState, useEffect } from 'react'
import style from '../../css/Logo.module.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

import { ChevronRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
function Logo() {
  const ProductS_Card_Images = ['product-1.jpg', 'product-2.jpg', 'product-3.jpg', 'product-4.jpg']
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false      
    });
  }, []);

  useEffect(() => {
    AOS.refresh();     
  }, []);
  const Products = [
    {
      id: 0,
      title: 'Masjid Minar Manufacturer',
      img: 'Hero_images/hero-1.png',
      // img: `${import.meta.env.BASE_URL}Hero_images/hero-1.png`,
      description: 'All Type of RCC Minar | ReadyMade Minar | Long and Strong Minar| Lighting Minar All Type Minar and sizes are ready to supply All Over India '
    },
    {
      id: 1,
      title: 'Aman Gumbad',
      img: 'Hero_images/hero-2.png',
      description: 'Good quality Rcc Gumbad & RCC construction services and concrete products in large quantity to the construction industry to ensure timely completion of the project.'
    },
    {
      id: 2,
      title: 'Aman Parapate Jali',
      img: 'Hero_images/hero-3.png',
      description: 'Good quality of parapet Jali Avaliabe ,small parapet | Big parapet | shahi Boundary | parapet Boundary Wall, etc. Avaliable in Large quantity.'
    },
    {
      id: 3,
      title: 'Marble Products',
      img: 'Hero_images/hero-4.png',
      description: 'All Kind of Marble Product used in Masjid Like Marble Wuzu Stand, Marble Mimber , Marble Mehrab , Marble Jali for Dargah , Marble parapet Jali , etc. ALl over India Delivery Avaliable.'
    }
  ]
  const HendelLeft = (count) => {
    if (count <= 0) {
      setCount(Products.length - 1);
    }
    else {
      setCount(count - 1);
    }
  }
  const HendelRight = (count) => {
    if (Products.length - 1 <= count) {
      setCount(0)
    }
    else {
      setCount(count + 1)
    }

  }
  return (
    <>
      <section className=''>
        <section className={style.hero_section} >
          <div className={`${style.icon} ${style.right}`} onClick={() => HendelRight(count)}><FaArrowRight /></div>

          <div className={`${style.contain_section} flex max-width `}>
            <motion.div
              key={count + "-img"}
              initial={{ opacity: 0, x: -100, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.9 }}
              className='animate__animated'
            >
              <img src={`${import.meta.env.BASE_URL}${Products[count].img}`} alt={Products[count].title} />

            </motion.div>
            <motion.div key={count + "-text"}
              className={`${style.inner_contain}  hero `}
              initial={{ opacity: 0, x: 100, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.9 }}
            >
              <h1>{Products[count].title}</h1>
              <p>{Products[count].description}</p>

              <button className={style.hero_btn}>
                <NavLink to='/products-masjid-minar' > View Product</NavLink>
              </button>
            </motion.div>

          </div>
          <div className={`${style.icon} ${style.left}`} onClick={() => HendelLeft(count)}><FaArrowLeft /></div>

        </section>
        {/* gumbad section */}
        <section className={`${style.contain_section} flex max-width  `} style={{ color: "black" }}>
          <div data-aos="fade-up">
            <img src={`/Hero_images/hero-2.png`} alt="Gumbad" />
          </div>
          <div className={`${style.inner_contain} flex`}>
            <h1>Leading RCC Minar <span>Manufactu</span>rer.</h1>
            <p> <NavLink to='/category/:blog'> <span>Harmain  Pecast Industries</span></NavLink> is a leading RCC Minar Manufacturer, Provide Readymade Masjid Minar, <NavLink to='/products-masjid-minar'> <span>RCC Minar </span></NavLink> all over India including Gujarat and Maharashtra. Harmain Minar having its presence in RCC Minar construction and concrete minar product Manufacturing was established in 1983 by concrete technologists with a mission to provide environment friendly, <br /> <br />
              Our Main Goal is to provide Good Quality and Strong      <NavLink to='/products-masjid-minar'> <span>RCC Masjid Minar </span> </NavLink> and Rcc construction services and concrete products Our Focuse is to provide High Quality and Good Finishing material and ensure timely completion of project.
            </p>
            <button className={`${style.about_btn} green_btn flex`}> <span>Read More About Company</span>
              <span> <ChevronRight size={20} className='btn_show  btn_high' /></span>
            </button>

          </div>
        </section>
        {/* products section */}
        <section className={`${style.product_section} `}>
          <div className='max-width'>
            <div className={`${style.product_contain} flex`}>
              <h2>Our Products</h2>
              <NavLink to='/products-masjid-minar'><button className={`${style.navbar_btn} green_btn  flex`}>
                <span >View All Products</span>
                <span> <ChevronRight size={20} className=' btn_show  btn_high' /></span>
              </button></NavLink>

            </div>
            <p>We are the Best RCC Minar Manufacturer, Readymade Masjid Minar , RCC Mimber, Marble Mimber and Wuzu Stand , Parapet Boundry Wall, etc.</p>
          </div>
          <div className={`${style.products_card} flex`}>
            {ProductS_Card_Images.map((card, idx) => {
              return <div key={idx}>
                <div data-aos="fade-up">
                  <img src={`/Hero_images/${card}`} alt="" />
                </div>

              </div>
            })}
          </div>
        </section>
        {/* contact section */}
        <section className={`${style.contact_section}`}>
          <div className='max-width'>
            <h1>Connect With Us</h1>
            <p>We have our own RCC minar Manufacturing unit in Maharashtra. Harmain Traders
              Product having its presence in RCC Minar construction and concrete minar product.</p>
            <div className={style.social_icons}>
              <a href="https://www.facebook.com/harmainmasjidminar" target="_blank" rel="noreferrer"> <span className={style.facebook}><FaFacebook /></span > </a>
              <a href="https://www.twitter.com/harmainmasjidminar" target="_blank" rel="noreferrer"><span className={style.x}><FaXTwitter /></span></a>
              <a href="https://www.instagram.com/harmainmasjidminar" target="_blank" rel="noreferrer"> <span className={style.instagram}><FaInstagram /></span></a>
              <a href="https://www.linkedin.com/harmainmasjidminar" target="_blank" rel="noreferrer"> <span className={style.linkedin}><FaLinkedin /></span></a>
              <a href="https://www.whatsapp.com/harmainmasjidminar" target="_blank" rel="noreferrer"> <span className={style.whatsapp}><FaWhatsapp /></span></a>
            </div>
          </div>
        </section>
        <a href="#top" className='top_icon flex'><FaArrowUp />
        </a>
      </section>
    </>
  )
}

export default Logo