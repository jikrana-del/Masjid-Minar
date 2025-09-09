
import { NavLink } from 'react-router-dom'
import { ChevronRight } from "lucide-react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import style from '../../../css/Minar.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
function Gallery_Datail() {
    const Data = useSelector((store) => store.uniqeGalleryData);

    const FinalData = Data && Data.length > 0 ? Data[0] : null;
   
    const { title } = useParams();
    if (!FinalData) {
        return <center><h1>Data Not Found...</h1></center>
    }

    return (

        <section key={FinalData.id}>
            <section className={`${style.Header}`}>
                <div>
                    <NavLink to='/'>Home  / </NavLink>
                    <NavLink to='/product/minar_gallery'>Minar Gallery / </NavLink>
                    {`${FinalData.title}`}

                </div>
            </section>
            <section >
                <div className={`${style.minar} flex max-width`}>
                    <div className={style.img_zoom} style={{ flex: "1 1 400px", maxWidth: "600px" }}>
                        <InnerImageZoom
                            src={FinalData.img}          // normal image
                            zoomSrc={FinalData.img} // high-res image for zoom
                            zoomPreload={true} // zoom image pehle load ho jayegi
                            width='400px'
                            height='auto'
                            zoomScale={4}
                            zoomType="hover"  // hover ya click use kar sakte ho
                            className='animate__zoomIn  animate__animated zoomImg'
                        />
                    </div>
                    <div className={`${style.minar_feet_contain} flex animate__zoomIn  animate__animated`}>
                        <h1>{FinalData.title}</h1>
                        <div className='hr'></div>

                        <p>
                            {FinalData.description.map((item, index) => (
                                <p key={index} style={{ display: "inline", fontSize: "18px" }}>

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

                                </p>
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

export default Gallery_Datail;