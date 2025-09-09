import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../../css/Minar.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import { FileText } from "lucide-react";
function Marble_Mimber_order() {
    const SelectedOption = ['Dafault Sorting', 'Sort by popularity', 'Sort by average reting', 'Sort by latest', 'Sort by price: low to high','Sort by price:  high to low'];
    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState('');
    const RCCImgData = useSelector(store => store.RccMimberImgData);
    console.log(RCCImgData);
    const [selectedData, setSelectedData] = useState(RCCImgData[0]);

    const [blog, setBlog] = useState(false);

    const HendelRccMimber = (index)=>{
        setSelectedData(MarbleMinarImgData[index]);
    }
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')   
            .replace(/:/g, '')     
            .replace(/[^a-z0-9-]/g, ''); 
    };
    const { rcc } = useParams()
  
    return (
        <>
            <section className={`${style.gallery_section} flex`}>
                {!blog &&
                    <section style={{ borderRight: "2px solid"}}>
                        <p style={{margin:"15px"}}>
                            <NavLink to='/'>Home / </NavLink>
                            <span>RCC Mimber</span>
                            <h3 style={{ fontWeight: "800", margin:"10px 0"}}>Minar</h3>
                        </p>
                        <div className={`${style.gallery_title} flex`} style={{margin:"0"}}>
                            <h6>
                                Showing the single result
                            </h6>
                            <select
                                className='form-select'
                                style={{ width: "260px" }}
                                value={selectedOption}
                                onChange={(e) => {
                                    const idx = e.target.selectedIndex;
                                    setSelectedOption(e.target.value);
                                    HendelRccMimber(idx)
                                }}
                            >
                                {RCCImgData.map((item, idx) => {
                                    return (
                                        <option>{item.category}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <section className={`${style.MinarSizeImg} flex max-width`} style={{ flexWrap: "wrap", flexDirection: "column" }}>
                            <div className={`${style.gallery} flex animate__zoomIn animate__animated`} key={`${Math.random()}`}>
                                {selectedData.items.map((item, idx) => (
                                    <div key={idx}>
                                        <NavLink
                                            to={`/${makeSlug('rcc minar')}`}
                                            className={`${style.contain} flex`}
                                            data-aos="fade-up"
                                            // onClick={() => HendelMarbleMimberData(idx, item.title)}
                                        >
                                            <div className={`${style.contain} flex`} data-aos="fade-up">
                                                <img src={item.img} alt="" style={{ borderRadius: "10px" }} />
                                                <button>{item.title}</button>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))}

                                    
                            </div>

                        </section>
                    </section>
                }
                <section className={style.blog_section} >
                    <NavLink to={`/category/blog`}
                        className={style.blog_btn}
                        onClick={() => setBlog(true)}
                    >Blog <FileText /> </NavLink>
                </section>
            </section>
        </>
    )
}

export default Marble_Mimber_order