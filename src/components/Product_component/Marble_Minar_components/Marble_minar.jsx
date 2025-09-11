import style from '../../../css/Minar.module.css'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion } from "framer-motion";

function Marble_minar() {
  const Marble_Minar_and_wuzu_stand = ['Marble Mimber', 'Wuzu Stand', 'Masjid-Marble-Mehrab', 'Marble Jali for Dargah', 'Marble Qibla and Mimber']


  const makeSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')   
      .replace(/:/g, '')     
      .replace(/[^a-z0-9-]/g, ''); 
  };

const Marble_Minar_Img = ['marble-mimber.jpg','harmain-traders-wuzu-stand.jpg','masjid-marble-mehrab.jpg','marble-jali-for-dargah.jpg','Marble-Qibla-and-member.jpg']
  return (
    <>
      <section>
        <section className={style.minar_section}>
          <div className={`${style.minar_contain} flex max-width `}>
            <motion.div
              key={Math.floor() + "-img"}
              initial={{ opacity: 0, x: -100, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.9 }}
              className='animate__animated'>
              <img src={`${import.meta.env.BASE_URL}Marble_mimber_images/Marble-Qibla-and-member.jpg`} style={{borderRadius:"10px"}} alt=""/>

            </motion.div>
            <motion.div key={ Math.floor() + "-text"}
                          className={`${style.inner_contain} `}
                          initial={{ opacity: 0, x: 100, scale: 0 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.9 }}>
              <h1>Marble Mimber </h1>
              <p> <a href="https://www.google.com/search?output=search&q=HARMAIN+PRECAST+INDUSTRIES+-+Masjid+Minar+%26+RCC+Minar+for+Masjid&ludocid=4372215395066124072&gsas=1&client=ms-android-oneplus&lsig=AB86z5VmLQhhIC4TnCt9__ybbUe-&kgs=d982538cffd756cd&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local"><strong>Harmain Traders </strong> </a> are making All Type Marble Mimber & Wuzu Stand. Wuzu is the islamic Procedure for washing parts of body using water , typically in preparation for formal prayers. IT followers a Produces to wash hands, mouth, nostrils, arms, face, hair,ears and feet. The Marble Mimber & Wuzu Stand is made in various designs for use in the mosque and other islamic places.</p>
              <NavLink to='/contact'>
                <button>Contact - US</button>
              </NavLink>
            </motion.div>
          </div>
        </section>
      <section className={`${style.MinarSizeImg} flex max-width`} >
                {Marble_Minar_Img.map((img, idx) => {
                  return <div key={idx}>
                    <NavLink to={`/product/marble/${makeSlug(Marble_Minar_and_wuzu_stand[idx])}`} 
                    >
                      <div className={`${style.contain} flex`} data-aos="fade-up" >
                        <img src={`${import.meta.env.BASE_URL}Marble_mimber_images/${img}`} height='100px' alt="" title='Click Me'  />
                        <button>{Marble_Minar_and_wuzu_stand[idx]}</button>
                      </div>
                    </NavLink>
                  </div>
                })}
              </section>
      </section>
    </>
  )
}

export default Marble_minar;