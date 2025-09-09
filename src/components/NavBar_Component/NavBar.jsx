
import s from '../../css/NavBar.module.css'

import  { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/harmain-minar-logo.jpeg'
import { ChartNoAxesColumn, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { uniqeDataAction } from '../../Store/Uniqe_minar_data';
import { UniqeGalleryDataAction } from '../../Store/Uniqe_gallery_Data_Slice';
import { uniqeParapetAction } from '../../Store/uniqe_Parapet_Jali_slice';
import { IoMdClose } from "react-icons/io";
import { UniqeMarbleMinarAction } from '../../Store/Uniqe_Marble_Minar_Slice';
function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState({
        work: false,
        products: false,
        minar: false,
        gallery: false,
        parapet: false,
        marble: false,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1023) {
                setOpenSubMenu({
                    work: false,
                    products: false,
                    minar: false,
                    gallery: false,
                    parapet: false,
                    marble: false,
                });
                setOpenMenu(false); 
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')   // spaces → dash
            .replace(/:/g, '')      // remove colon
            .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
    };

    const dispatch = useDispatch()
    const MinarData = useSelector(store => store.AllMinarData);
    const All_Gallery_Data = useSelector(store => store.AllGalleryData);
    const All_Parapet_Data = useSelector(store => store.AllParapetJali);
    const All_Marble_Mimber = useSelector(store => store.AllMarbleMinarData)

    const MinarSize = ['90 FEET MINAR', '70 FEET MINAR', '60 FEET MINAR', '50 FEET MINAR', '44 FEET MINAR', '42 FEET MINAR', '40 FEET MINAR', '35 FEET MINAR', '32 FEET MINAR', '30 FEET MINAR', '28 FEET MINAR', '25 FEET MINAR', '23 FEET MINAR', '22 FEET MINAR', '20.5 FEET MINAR', '18 FEET MINAR', '17 FEET MINAR', '16 FEET MINAR', '14 FEET MINAR', '12 FEET MINAR', '11 FEET MINAR', '8 FEET MINAR', '6 FEET MINAR', '5 FEET MINAR', '3.5 FEET MINAR', '2 FEET MINAR']
    const MinarLink = [90, 70, 60, 50, 44, 42, 40, 35, 32, 30, 28, 25, 23, 22, '20-5', 18, 17, 16, 14, 12, 11, 8, 6, 5, '3-5', 2];
    const Minar_Gallery = ['All Masjid Product', 'High Quality Minar', 'Khubsurat Minar', 'Lighting Minar', 'Minar Block', 'Mosque Minar-Masjid ke Minar', 'Strong Minar', 'Shandar Minar', 'Makki Minar', 'Madni Minar'];
    const Parapet_Jali = ['Parapet Boundary Wall', 'Shahi Boundary', 'Small Parapet-Jali', 'Medium Size Parapet Jali', 'Parapet-Jali Design:1', 'Parapet-Jali Design:2', 'Parapet-Jali Design:3', 'Parapet-Jali Design:4', 'Parapet-Jali Design:5']
    const Marble_Minar_and_wuzu_stand = ['Marble Mimber', 'Wuzu Stand', 'Masjid-Marble-Mehrab', 'Marble Jali for Dargah', 'Marble Qibla and Mimber']


    const HendelMinarSize = (index, title) => {
        const FilterMinarData = MinarData.filter(item => item.title === title)
        console.log(FilterMinarData);

        dispatch(uniqeDataAction.MinarUniqeData(FilterMinarData))
    }

    const HendelGallery = (index, title) => {
        const filterData = All_Gallery_Data.filter(item => item.title === title);
        console.log(filterData);
        dispatch(UniqeGalleryDataAction.UniqeGalleryData(filterData));
    }

    const HendelParapet = (index, title) => {
        const filterParapetData = All_Parapet_Data.filter(item => item.title == title)
        console.log(filterParapetData);
        dispatch(uniqeParapetAction.uniqeParapetData(filterParapetData))
    }

    const HendelMArbleMimber = (index, title) => {
        console.log(title);

        const FilterData = All_Marble_Mimber.filter(item => item.title === title);
        console.log(FilterData);
        dispatch(UniqeMarbleMinarAction.UniqeMarbleMinar(FilterData))

    }
    const handleSubMenu = (menu) => {

        setOpenSubMenu((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }))
    };
    return (
        <section className={`${s.nav_section}`}>
            <section className={`${s.nav_containar}`}>
                <nav className={`flex max-width  ${s.nav}`}>
                    <div>
                        <NavLink to='/'><img src={logo} alt="Minar logo" width='200px' /></NavLink>

                    </div>
                    <div >
                        <ul className={`flex ${s.nav_link} ${openMenu ? s.display : ""}`}
                        >
                            <li>
                                <NavLink className={s.link} to='/about-top-masjid-minar-company'>ABOUT</NavLink>
                            </li>
                            <li
                                onMouseEnter={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, work: true })) : undefined}
                                onMouseLeave={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, work: false })) : undefined}

                            >
                                <NavLink className={`${s.link} flex `} to='/minar-design-gallery'
                                ><span>WORK</span>
                                    <span className={s.drop_icon} onClick={(e) => {
                                        e.preventDefault();
                                        handleSubMenu('work')
                                    }
                                    }>

                                        {!openSubMenu.work
                                            ? <ChevronDown size={17} />
                                            : <IoIosArrowUp size={17} />
                                        }
                                    </span>
                                </NavLink>

                                <ul className={`${s.work} ${s.product_coman_style} ${openSubMenu.work ? s.show : ""}`}>
                                    <li><NavLink to='/video-gallery'>WORK VIDEOS</NavLink></li>
                                    <li><NavLink to='/minar-design-gallery'>WORK PHOTOS</NavLink></li>
                                </ul>
                            </li>

                            <li
                                onMouseEnter={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, products: true })) : undefined}
                                onMouseLeave={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, products: false })) : undefined}

                            >
                                <NavLink className={`${s.link} flex `} to='/products-masjid-minar'   ><span>PRODUCTS</span>
                                    <span className={s.drop_icon} onClick={(e) => {
                                        e.preventDefault();
                                        handleSubMenu('products')
                                    }
                                    } >
                                        {!openSubMenu.products
                                            ? <ChevronDown size={17} />
                                            : <IoIosArrowUp size={17} />
                                        }
                                    </span> </NavLink>
                                <ul className={`${s.product}  ${openSubMenu.products ? s.show : ""}`}>
                                    <li
                                        onMouseEnter={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, minar: true })) : undefined}
                                        onMouseLeave={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, minar: false })) : undefined}
                                    >
                                        <NavLink to='/product/masjid-rcc-minar' > <span>MINAR</span>
                                            <span className={s.drop_icon} onClick={(e) => {
                                                e.preventDefault();
                                                handleSubMenu('minar')
                                            }
                                            }>
                                                {!openSubMenu.minar
                                                    ? <ChevronDown size={17} />
                                                    : <IoIosArrowUp size={17} />
                                                }
                                            </span>
                                        </NavLink>
                                        <ul className={`${s.minar} ${s.product_coman_style}  ${openSubMenu.minar ? s.show : ""} `}>
                                            {MinarSize.map((minar, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <NavLink to={`/product/minar/${MinarLink[idx]}-feet`} key={idx} onClick={() => HendelMinarSize(idx, minar)} >{minar}</NavLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li>

                                        <NavLink to='/product/gumbad'>GUMBAD</NavLink>
                                    </li>
                                    <li
                                        onMouseEnter={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, gallery: true })) : undefined}
                                        onMouseLeave={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, gallery: false })) : undefined}

                                    >
                                        <NavLink to='/product/minar_gallery'> <span>MINAR GALLERY</span>
                                            <span className={s.drop_icon} onClick={(e) => {
                                                e.preventDefault();
                                                handleSubMenu('gallery')
                                            }
                                            } >
                                                {!openSubMenu.gallery
                                                    ? <ChevronDown size={17} />
                                                    : <IoIosArrowUp size={17} />
                                                }
                                            </span></NavLink>
                                        <ul className={`${s.gallery} ${s.product_coman_style}  ${openSubMenu.gallery ? s.show : ""}`}>
                                            {Minar_Gallery.map((minar, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <NavLink to={`/product/gallery/${makeSlug(minar)}`} onClick={() => HendelGallery(idx, minar)}>{minar}</NavLink >

                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li
                                        onMouseEnter={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, parapet: true })) : undefined}
                                        onMouseLeave={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, parapet: false })) : undefined}

                                    >
                                        <NavLink to='/product/parapet_jali'> <span>PARAPET JALI</span>
                                            <span className={s.drop_icon} onClick={(e) => {
                                                e.preventDefault();
                                                handleSubMenu('parapet')
                                            }
                                            }

                                            >
                                                {!openSubMenu.parapet
                                                    ? <ChevronDown size={17} />
                                                    : <IoIosArrowUp size={17} />
                                                }
                                            </span>
                                        </NavLink>
                                        <ul className={`${s.parapet} ${s.product_coman_style}  ${openSubMenu.parapet ? s.show : ""}`}>
                                            {Parapet_Jali.map((minar, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <NavLink
                                                            //  to={`/product/${makeSlug(minar)}`}
                                                            to={`/product/parapet-jali/${makeSlug(minar)}`}
                                                            onClick={() => HendelParapet(idx, minar)}>{minar}</NavLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li
                                        onMouseEnter={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, marble: true })) : undefined}
                                        onMouseLeave={window.innerWidth >= 1023 ? () => setOpenSubMenu(prev => ({ ...prev, marble: false })) : undefined}

                                    >
                                        <NavLink to='/product/marble_minar' ><span>MARBLE MINAR & <br /> WUZU STAND</span>
                                            <span
                                                className={s.drop_icon} onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSubMenu('marble')
                                                }
                                                }

                                            >
                                                {!openSubMenu.marble
                                                    ? <ChevronDown size={17} />
                                                    : <IoIosArrowUp size={17} />
                                                }
                                            </span></NavLink>
                                        <ul className={`${s.marble} ${s.product_coman_style}  ${openSubMenu.marble ? s.show : ""}`}>

                                            {Marble_Minar_and_wuzu_stand.map((minar, idx) => {
                                                return (
                                                    <li>
                                                        <NavLink to={`/product/marble/${makeSlug(minar)}`} onClick={() => HendelMArbleMimber(idx, minar)}>{minar}</NavLink>

                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to={`/product/${makeSlug('rcc minar')}`} >  RCC MINAR</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/product/musalla-tiles`} >MUSALLA TILES</NavLink>

                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={s.link} to='/inquiry' >INQUIRY</NavLink>
                            </li>
                            <li>
                                <NavLink className={s.link} to='/contact' >CONTACT</NavLink>
                            </li> 
                        </ul>
                    </div>
                    <div className={s.navbar_btn}>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? `${s.active_link}` : ''
                            }
                        >
                            <button className='green_btn flex'>
                                <span>Read More About Company</span>
                                <span><ChevronRight size={20} className='btn_show btn_high' /></span>
                            </button>
                        </NavLink>
                    </div>
                    <div className={s.menu} onClick={() => setOpenMenu(!openMenu)} >
                        {openMenu ? <IoMdClose size={35} /> : <Menu size={35} />}
                    </div>
                </nav >
            </section >
        </section>
    )
}

export default NavBar
