import { NavLink, useParams } from 'react-router-dom';
import { ChevronRight } from "lucide-react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import style from '../../../css/Minar.module.css'
import { useSelector } from 'react-redux';

function Gallery_Datail() {
    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '-')   
            .replace(/:/g, '')      
            .replace(/[^a-z0-9-]/g, ''); 
    };

    const { title } = useParams();
    const allGalleryData = useSelector((store) => store.AllGalleryData); 
    const FinalData = allGalleryData?.find(
        (item) => makeSlug(item.title) === title
    );

    if (!FinalData) {
        return (
            <center>
                <h1>Data not found for "{title}"</h1>
            </center>
        );
    }

    return (
        <section key={FinalData.id}>
            <section className={`${style.Header}`}>
                <div>
                    <NavLink to='/'>Home / </NavLink>
                    <NavLink to='/product/minar_gallery'>Minar Gallery / </NavLink>
                    {FinalData.title}
                </div>
            </section>

            <section>
                <div className={`${style.minar} flex max-width`}>
                    {/* Image Zoom */}
                    <div className={style.img_zoom} style={{ flex: "1 1 400px", maxWidth: "600px" }}>
                        <InnerImageZoom
                            src={FinalData.img}
                            zoomSrc={FinalData.img}
                            zoomPreload={true}
                            width='400px'
                            height='auto'
                            zoomScale={4}
                            zoomType="hover"
                            className='animate__zoomIn animate__animated zoomImg'
                        />
                    </div>

                    {/* Details */}
                    <div className={`${style.minar_feet_contain} flex animate__zoomIn animate__animated`}>
                        <h1>{FinalData.title}</h1>
                        <div className='hr'></div>

                        <p>
                            {Array.isArray(FinalData.description) &&
                                FinalData.description.map((item, index) => (
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
                                            item.text
                                        )}
                                    </span>
                                ))}
                        </p>

                        <NavLink to='/inquiry'>
                            <button className={`green_btn flex`}>
                                <span>Send Inquiry</span>
                                <span><ChevronRight size={20} className='btn_show btn_high' /></span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Gallery_Datail;
