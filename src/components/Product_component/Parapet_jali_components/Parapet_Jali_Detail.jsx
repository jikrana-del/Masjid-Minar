

import { NavLink } from 'react-router-dom'
import { ChevronRight } from "lucide-react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import style from '../../../css/Minar.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
function Parapet_Jali_Detail() {
    const Data = useSelector(store =>  store.uniqeParapetData);
    const FinalData = Data && Data.length > 0 ? Data[0] : null;
    console.log(Data);
    
    // const FinalData = Array.isArray(Data) ? Data[0] : Data;
    
    if(!FinalData){
        return <center><h1>Data Not Found...</h1></center>
    } 
    const { slug } = useParams();


    return (
        <section key={FinalData.id}>
            <section className={`${style.Header}`}>
                <div>
                    <NavLink to ='/'> Home / </NavLink>
                    <NavLink to={`/product-category/parapet/parapet-jali-order`}> parapet Jali / </NavLink>
                    {`  ${FinalData.title}`}</div>
            </section>
            <section >
                <div className={`${style.minar} flex max-width`}>
                    <div className={style.img_zoom}>
                        <InnerImageZoom
                            src={FinalData.img}          // normal image
                            zoomSrc={FinalData.img} // high-res image for zoom
                            zoomPreload={true} // zoom image pehle load ho jayegi
                            width='250px'
                            zoomType="hover"  // hover ya click use kar sakte ho
                            zoomScale={4}
                            className='animate__zoomIn animate__animated'
                        />
                    </div>
                    <div className={`${style.minar_feet_contain} flex animate__zoomIn  animate__animated`}>
                        <h1>{FinalData.title}</h1>
                        {/* <div className='hr'></div>descreiption */}
                        <p>
                            {FinalData.description.map((item, index) => (
                                <span key={index} style={{ color:"black", fontSize: "18px" }}>

                                    {item.route ? (
                                        <NavLink to={item.route} className="text-blue-600 hover:underline">
                                            {item.text}
                                        </NavLink>
                                    ) : item.Link ? (

                                        <a
                                            href={item.Link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-green-600 hover:underline"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        // agar normal text hai to direct render karo
                                        item.text

                                    )}

                                </span>
                            ))}
                        </p>  
                        <NavLink to='/inquiry'><button className={`green_btn  flex`} >
                            <span>Send Inquiry</span>
                            <span> <ChevronRight size={20} className=' btn_show  btn_high' /></span>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Parapet_Jali_Detail