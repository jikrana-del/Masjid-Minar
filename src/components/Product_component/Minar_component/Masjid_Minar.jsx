import style from '../../../css/Minar.module.css'
import gumbad from '../images/Gumbad.png'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { uniqeDataAction } from '../../../Store/Uniqe_minar_data';
import { FileText } from "lucide-react";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom'

function Masjid_Minar() {

    const dispatch = useDispatch();
    const { minar } = useParams();

    const MinarLink = [90, 70, 60, 50, 44, 42, 40, 35, 32, 30, 28, 25, 23, 22, '20-5', 18, 17, 16, 14, 12, 11, 8, 6, 5, '3-5', 2];

    const Minar_Img_Data = useSelector(store => store.MinarImgData)
    const MinarData = useSelector(store => store.AllMinarData);
    console.log(MinarData);

    console.log(Minar_Img_Data);
    const [blog, setBlog] = useState(false);

    const [selectedData, setSelectedData] = useState(Minar_Img_Data[0]);
    const [selectedOption, setSelectedOption] = useState('');

    console.log(selectedData);
    const HendelMinar = (index) => {
        setSelectedData(Minar_Img_Data[index])
    }
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')   // spaces → dash
            .replace(/:/g, '')      // remove colon
            .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = selectedData.items.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(selectedData.items.length / itemsPerPage);
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }
    const HendelMasjidData = (index, title , item) => {
        console.log("item : ", item);
        
        const FilterMasjidData = MinarData.filter(item => item.title === title)
        console.log(  "filter : ",FilterMasjidData, title);
        dispatch(uniqeDataAction.MinarUniqeData(FilterMasjidData));
        console.log ("curr : ", indexOfFirstItem + index);
        
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
                                showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, selectedData.items.length)}  of {selectedData.items.length}  results
                            </p>
                            <select
                                className='form-select'
                                style={{ width: "260px" }}
                                value={selectedOption}
                                onChange={(e) => {
                                    const idx = e.target.selectedIndex;
                                    setSelectedOption(e.target.value);
                                    HendelMinar(idx)
                                }}
                            >
                                {Minar_Img_Data.map((item, idx) => {
                                    return (
                                        <option>{item.category}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <section className={`${style.MinarSizeImg} flex max-width`} style={{ flexWrap: "wrap", flexDirection: "column" }}>
                            <div className={`${style.gallery} flex animate__zoomIn animate__animated`} key={`${Math.random()}`}>
                                {currentItems.map((item, idx) => {
                                    return <div key={idx}>
                                        <NavLink to={`/product/minar/${item.size}-feet`} onClick={() => HendelMasjidData(idx, item.title,item)}>
                                            <div className={`${style.contain} flex`} data-aos="fade-up">
                                                <img src={item.img} alt="" style={{ borderRadius: "10px", height: "390px", width: "290px" }} />
                                                <button>{item.title}</button>
                                            </div>
                                        </NavLink>
                                    </div>
                                })}
                            </div>
                            <Stack spacing={2} sx={{ alignItems: "center", marginTop: "20px" }}>
                                <Pagination
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    color="primary"
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </Stack>
                        </section>
                    </section>
                }
                <section className={style.blog_section} >
                    <NavLink to={`/category/blog`}
                        className={style.blog_btn}
                        onClick={() => setBlog(true)}
                    >Blog <FileText /></NavLink>
                </section>
            </section>
        </>
    )
}

export default Masjid_Minar;

