
import { useParams } from 'react-router-dom'

import { NavLink } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../../css/Minar.module.css'
import 'aos/dist/aos.css';
import {  useState } from 'react'
import { FileText } from "lucide-react";

function Patapet_Jali_order() {
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')   
            .replace(/:/g, '')     
            .replace(/[^a-z0-9-]/g, ''); 
    };
    const ParapetImgData = useSelector(store => store.ParapetJAliImgData);
    const [blog, setBlog] = useState(false);

    const [selectedData, setSelectedData] = useState(ParapetImgData[0]);
    const [selectedOption, setSelectedOption] = useState('');
    
    const { parapet } = useParams();
    const HendelParapetJali = (index) => {
setSelectedData(ParapetImgData[index])
    }

  return (
   <>
   <section className={`${style.gallery_section} flex`}>
              {!blog &&
                  <section style={{ borderRight: "2px solid" }}>
                      <p style={{ marginLeft: "90px" }}>
                          <NavLink to='/'>Home / </NavLink>
                          <span>Minar</span>
                          <h3 style={{ fontWeight: "800", margin: "20px 0" }}>Minar</h3>
                      </p>
                      <div className={`${style.gallery_title} flex`}>
                          <p>
                              Showing all 9 results

                          </p>
                          <select
                              className='form-select'
                              style={{ width: "260px" }}
                              value={selectedOption}
                              onChange={(e) => {
                                  const idx = e.target.selectedIndex;
                                  setSelectedOption(e.target.value);
                                  HendelParapetJali(idx)
                              }}
                          >
                              {ParapetImgData.map((item, idx) => {
                                  return (
                                      <option>{item.category}</option>
                                  )
                              })}
                          </select>
                      </div>
                      <section className={`${style.MinarSizeImg} flex max-width`} style={{ flexWrap: "wrap", flexDirection: "column" }}>
                          <div className={`${style.gallery} flex animate__zoomIn animate__animated`} key={`${Math.random()}`}>
                              {selectedData.items.map((item, idx) => {
                                  return <div key={idx}>
                                      <NavLink to={`/product/parapet-jali/${makeSlug(item.title)}`}
                                       >
                                          <div className={`${style.contain} flex`} data-aos="fade-up">
                                              <img src={item.img} alt="" style={{ borderRadius: "10px"}} />
                                              <button>{item.title}</button>
                                          </div>
                                      </NavLink>
                                  </div>
                              })}
                          </div>
                          
                      </section>
                  </section>
              }
                <section className={style.blog_section} >
                                  <NavLink to={`/category/blog`}
                                      className={style.blog_btn}
                                      onClick={() => setBlog(true)}
                                  >Blog <FileText/> </NavLink>
                              </section>
   </section>
   </>
  )
}

export default Patapet_Jali_order

