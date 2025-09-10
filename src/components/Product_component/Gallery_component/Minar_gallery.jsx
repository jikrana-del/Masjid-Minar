

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../../css/Minar.module.css'
import { FileText } from "lucide-react";
function Minar_gallery() {
  const Gallery_Img_Data = useSelector(store => store.GalleryData);

  const [selectedOption, setSelectedOption] = useState('');

  const [selectedData, setSelectedData] = useState(Gallery_Img_Data[0]);
  const [blog, setBlog] = useState(false);

  const HendelGallery = (index) => {
    setSelectedData(Gallery_Img_Data[index]);
  }
  
  const makeSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')   // spaces → dash
      .replace(/:/g, '')      // remove colon
      .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
  };
  return (
    <>

      <section className={`${style.gallery_section} flex`}>
        {!blog &&
          <section style={{ borderRight: "2px solid" }}>
            <p style={{ marginLeft: "90px" }} >
              <NavLink to='/'>Home / </NavLink>
              <span>Minar Gallery</span>
              <h2 style={{
               
               
              }}>Minar Gallery</h2>
            </p>
            <div>
              <div className={`${style.gallery_title} flex`}>
                <p>Showing all 10 results</p>
                <select
                  style={{ width: "260px" }}
                  className='form-select'
                  value={selectedOption}
                  onChange={(e) => {
                    const idx = e.target.selectedIndex;
                    setSelectedOption(e.target.value)
                    HendelGallery(idx)
                  }}
                >
                  {Gallery_Img_Data.map((item, idx) => {
                    return (
                      <option key={idx} value={item.category} >{item.category}</option>
                    )
                  })}
                </select>
              </div>
              <section className='max-width'>
                <div className={`${style.gallery} flex animate__zoomIn animate__animated`} key={`${Math.random()}`}>
                  {selectedData.items.map((item, idx) => {
                    return <div key={idx}>
                      <NavLink to={`/product/gallery/${makeSlug(item.title)}`}>
                        <div className={`${style.gallery_contain}`}
                         >
                          <img src={item.img} alt="" />
                          <h5>{item.title}</h5>
                        </div>
                      </NavLink>
                    </div>
                  })}
                </div>
              </section>
            </div>
          </section>
        }
        <section className={style.blog_section} >
          <NavLink to={`/category/blog`}
            className={style.blog_btn}

            onClick={() => setBlog(true)}
          >Blog &nbsp;
            <FileText />
          </NavLink>
        </section>

      </section>
    </>
  )
}

export default Minar_gallery

