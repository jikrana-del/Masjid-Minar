import style from '../../../css/Minar.module.css'
import gumbad from '../images/Gumbad.png'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function Minar() {
  const MinarSizeImg = [
    '2-feet-masjid-minar-300x452.jpg', '3.5-feet-masjid-minar-300x452.jpg', '5-feet-masjid-minar-300x455.jpg',
    '6-feet-masjid-minar-300x456.jpg', '8-feet-masjid-minar-300x451.jpg', '11-feet-masjid-minar-300x450.jpg',
    '12-feet-masjid-minar-300x450.jpg', '14-feet-masjid-minar-300x450.jpg', '16-feet-masjid-minar-300x451.jpg',
    '17-feet-masjid-minar-300x451.jpg', '18-feet-masjid-minar-300x454.jpg', '20-feet-masjid-minar-300x452.jpg',
    '22-feet-masjid-minar-300x454.jpg', '23-feet-300x451.jpg', '25-feet-aman-masjid-minar-300x453.jpg',
    '28-feet-aman-masjid-minar-300x452.jpg', '30-feet-aman-masjid-minar-300x454.jpg', '32-feet-300x452.jpg',
    '35-feet-300x449.jpg', '40-feet-300x454.jpg', '42-feet-300x452 (1).jpg', '44-feet-aman-masjid-minar-300x454 (1).jpg',
    '50-feet-masjid-minar-300x452 (1).jpg', '60-feet-300x458 (1).jpg', '70-feet-300x451 (1).jpg', '90-feet-300x452 (1).jpg',
  ]
  const MinarName = ['90 FEET MINAR', '70 FEET MINAR', '60 FEET MINAR',
    '50 FEET MINAR', '44 FEET MINAR', '42 FEET MINAR', '40 FEET MINAR',
    '35 FEET MINAR', '32 FEET MINAR', '30 FEET MINAR', '28 FEET MINAR',
    '25 FEET MINAR', '23 FEET MINAR', '22 FEET MINAR', '20.5 FEET MINAR',
    '18 FEET MINAR', '17 FEET MINAR', '16 FEET MINAR', '14 FEET MINAR',
    '12 FEET MINAR', '11 FEET MINAR', '8 FEET MINAR', '6 FEET MINAR',
    '5 FEET MINAR', '3.5 FEET MINAR', '2 FEET MINAR']
  const MinarLink = [90, 70, 60, 50, 44, 42, 40, 35, 32, 30, 28, 25, 23, 22, '20-5', 18, 17, 16, 14, 12, 11, 8, 6, 5, '3-5', 2];

 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false     
    });
  }, []);

  useEffect(() => {
    AOS.refresh();     
  }, []);
  return (
    <>
      <section>
        <section className={style.minar_section}>
          <div className={`${style.minar_contain} flex max-width `}>
            <div className='animate__zoomIn animate__animated'>
              <img src={gumbad} alt="Gumbad" />
            </div>
            <div className='animate__fadeInRight animate__animated'>
              <h1>High Quality Minar</h1>
              <p>At Aman Minar <a href="https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local"> <strong>(Harmain Traders)</strong> </a> are Offering here the various types of Minar for use in various places as a decoration piece. it is available with us in a plethora of designs, colors, and finishes. Our adroit team of professionals design and <NavLink to='/category/:blog'> <strong>Construct these minars</strong>  </NavLink>using excellent quality reinforced concrete cement and pioneering techniques in adherence with trending designs of the market. It has Sturdy construction for long-lasting life; Resistance from all kinds of weather-able impacts. The minar is very effective and useful.</p>
              <NavLink to='/contact'>
              <button>Contact - US</button>
              </NavLink>
            </div>
          </div>
        </section>
        <section className={`${style.MinarSizeImg} flex max-width`} style={{ flexWrap: "wrap" }}>
          {MinarSizeImg.reverse().map((img, idx) => {
            return <div key={idx}>
              <NavLink to={`/product/minar/${MinarLink[idx]}-feet`}
              
              >
                <div className={`${style.contain} flex`} data-aos="fade-up" >
                  <img src={`${import.meta.env.BASE_URL}Minar_sizes_images/${img}`} alt="" title='Click Me' />
                  <button>{MinarName[idx]}</button>
                </div>
              </NavLink>
            </div>
          })}
        </section>
      </section>
    </>
  )
}

export default Minar

