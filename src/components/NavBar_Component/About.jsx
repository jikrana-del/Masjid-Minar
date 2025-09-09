import style from '../../css/About.module.css'
import { ChevronRight } from "lucide-react";
import { useState } from 'react';
import CountUp from 'react-countup';
import 'animate.css';
import { NavLink } from 'react-router-dom';

function About() {
  const [BtnIndex, setBtnIndex] = useState(0)
  const [isTrue, setIsTrue] = useState(true);
  const Experience_Datail = [
    {
      count: 10,
      title: 'year Of Experience',
      descreption: 'Trusted name in mosque Gumbad and Masjid Minar Manufacturing in mumbai India.'
    },
    {
      count: 150,
      title: 'Total Successfull Projects',
      descreption: 'Completed 150+ Projects For Mosque Minar Products with Great results.'

    },
    {
      count: 3,
      title: 'Cities We Serve',
      descreption: 'Helping people in 3+ cities with our services and support for Masjid Minar.'
    }
  ]
  const descreption = ['Based in Mumbai, Maharashtra, we have successfully supplied our products to various regions, including Gujarat and Maharashtra, and continue to expand our footprint across India. Our efficient logistics and dedicated customer service ensure timely delivery and seamless project execution.',
    'Our mission is to provide durable, aesthetically pleasing, and structurally sound RCC products that enhance the spiritual ambiance of mosques. We strive to blend traditional craftsmanship with modern techniques to meet the evolving needs of our clients.']

  const Products = [
    {
      title: 'RCC Minar',
      descreption: 'Offering various sizes from 2 feet to 35 feet, our ready - made minars are designed with precision and care to suit different architectural requirements.'
    },
    {
      title: 'Gumbads',
      descreption: 'Crafted to add grandeur to mosque structures, our gumbads are known for their impeccable finish and durability.'
    },
    {
      title: 'Parapet Jali',
      descreption: 'We provide intricately designed parapet jalis, including small, medium, and shahi boundary designs, enhancing the aesthetic appeal of mosque boundaries'
    },
    {
      title: 'Marble Products',
      descreption: 'Our marble offerings encompass mimbers, wuzu stands, mehrabs, and jalis for dargahs, each reflecting superior craftsmanship'
    },
    {
      title: 'RCC Mimbers',
      descreption: 'Robust and elegantly designed, our RCC mimbers serve as essential elements within the mosque interiors.'
    },
    {
      title: 'Musalla Tiles',
      descreption: 'We offer high-quality musalla tiles that provide both functionality and beauty to prayer areas.'
    }


  ]

  const HendelReach = () => {
    setBtnIndex(0)
    setIsTrue(true)
  }

  const HendelMission = () => {
    setBtnIndex(1)
    setIsTrue(false)
  }
  const makeSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')   // spaces → dash
      .replace(/:/g, '')      // remove colon
      .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
  };
  return (
    <section className={style.about_section}>
      <section className={style.about}>
        <div className={`${style.about_content} max-width`}>
          <button className={style.harmain_btn}>Harmain Minar</button>
          <h1>Top Masjid Minar Manufacturer.</h1>
          <p>At Harmain precast Industies, we take Pride in being a leading Manufacturer and supplier of high-quality RCC (Reinforced Cement Concrete) Products tailored for mosques and religious institution across India. Established in 1983, our commitment to excellence and innovation has positioned us as a trusted name in the industry.</p>
          <NavLink to='/'>
            <button className={`${style.about_btn} green_btn flex`}> <span>Read More About Company</span>
              <span> <ChevronRight size={20} className='btn_show  btn_high' /></span>
            </button>
          </NavLink>
         
        </div>
      </section>
      {/* info section */}
      <section className={`${style.detail} flex max-width`}>
        {Experience_Datail.map((item, idx) => {
          return <div key={idx}>
            <div className={style.info}>
              <h1> <CountUp start={0} end={item.count} duration={2} />+</h1>
              <h4>{item.title}</h4>
              <p>{item.descreption}</p>
            </div>
          </div>
        })}
      </section>
      {/* descreption section */}
      <section className={`${style.descreption} flex max-width`}>
        <div className={style.des_contain}>
          <div className={style.btns}>
            <button onClick={HendelReach} className={`${BtnIndex === 0 ? style.btn_active : ''}`}>Reach</button>
            <button onClick={HendelMission} className={`${BtnIndex === 1 ? style.btn_active : ''}`}>Mission</button>
          </div>
          <div>
            <p key={BtnIndex} className="animate__animated animate__backInDown">
              {descreption[BtnIndex]}
            </p>

          </div>
        </div>
        <div className={`${style.harmain}`}>
          <h1> <span>Harmain</span> Masjid Minar</h1>
          <p>
            We have our own <NavLink to={`/${makeSlug('rcc minar')}`}> <span>RCC Minar</span> </NavLink> manufacturing unit in Vasai (East), Maharashtra under the name Harmain Precast Industries. The company has a strong presence in <NavLink to={`/${makeSlug('rcc minar')}`}> <span>RCC Minar</span> </NavLink> construction and concrete minar products. Our manufacturing unit was established in 1983 by concrete technologists with a mission to provide environment-friendly, high-quality RCC Minars, RCC construction services, and concrete products in large quantities to the construction industry, ensuring the timely completion of projects.
          </p>
          <NavLink to='/'>
          <button className='green_btn flex'>
            <span>Read More About Company</span>
            <span> <ChevronRight size={20} className='btn_show  btn_high' /></span>
          </button>
          </NavLink>
        </div>
      </section>
      {/* our product */}
      <section className={`${style.our_product}`}>
        <div className='max-width'>
          <h1>Explore Our Products for Masjid Minar</h1>
          <p>We specialize in a diverse range of products, including:</p>
        </div>
      </section>
      {/* product section */}
      <section className={`${style.product_section} flex max-width`}>
        {Products.map((product, idx) => {
          return <div key={idx}>
            <div className={style.product}>
              <h2>{product.title}</h2>
              <p>{product.descreption}</p>
            </div>
          </div>
        })}
      </section>
      {/* quality section */}
      <section className={`${style.quality_section} max-width flex`}>
        <NavLink to='/'>
          <button className='green_btn' >
            <span style={{ color: "white" }}> Quality Assururance</span>
            <span style={{ color: "white" }}> <ChevronRight size={20} className='btn_show  btn_high' /></span>
          </button>
        </NavLink>
       
        <p>As an ISO-cretified company, we adhere to stringent quality control measures, ensuring that each product meets the highest standards of strengh, durability, and finish. Our experienced team utilizes premium-grade materials and advanced techniques to deliver products that stand the text of time.</p>
      </section>


    </section>
  );
}

export default About;
