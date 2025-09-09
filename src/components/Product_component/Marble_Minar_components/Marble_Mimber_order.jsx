import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../../css/Minar.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import { FileText } from "lucide-react";
import { UniqeMarbleMinarAction } from '../../../Store/Uniqe_Marble_Minar_Slice';
function Marble_Mimber_order() {
    const dispatch = useDispatch()
    const MarbleMinarImgData = useSelector(store => store.MarbleMinarImgData)
    const AllMarbleMinarData = useSelector(store => store.AllMarbleMinarData);
    console.log(AllMarbleMinarData);
    
    console.log(MarbleMinarImgData);
    const [blog, setBlog] = useState(false);

    const [selectedData, setSelectedData] = useState(MarbleMinarImgData[0]);
    const [selectedOption, setSelectedOption] = useState('');
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')   // spaces → dash
            .replace(/:/g, '')      // remove colon
            .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
    };
    const { Marble } = useParams()
    const HendelMarbleMinar = (index) =>{
      setSelectedData(MarbleMinarImgData[index]);
    }
    const HendelMarbleMimberData = (index, title)=>{
const FilterData = AllMarbleMinarData.filter(item => item.title === title);
console.log(FilterData);

dispatch(UniqeMarbleMinarAction.UniqeMarbleMinar(FilterData));
    }
    return (
       <>
       <section  className={`${style.gallery_section} flex`}>
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
                                  HendelMarbleMinar(idx)
                              }}
                          >
                              {MarbleMinarImgData.map((item, idx) => {
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
                                      <NavLink to={`/product/marble/${item.title}`}  className={`${style.contain} flex`} data-aos="fade-up" onClick={() => HendelMarbleMimberData(idx, item.title)}>
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

export default Marble_Mimber_order