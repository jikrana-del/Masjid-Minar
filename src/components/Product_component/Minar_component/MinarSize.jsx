

import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, NavLink } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import style from "../../../css/Minar.module.css";
import { ChevronRight } from "lucide-react";

 function FEET_2() {
    const { feet } = useParams();
    const allMinarData = useSelector((store) => store.AllMinarData);
    const cleanFeet  = feet.replace('-feet','') 
     const FinalData = allMinarData.find(item => item.size.toString() === cleanFeet);
    
    
    return (
        <section key={FinalData.id}>
            <section className={`${style.Header}`}>
                <NavLink to="/"> <span> Home / </span></NavLink>
                <NavLink to={`/product-category/minars/masjid-minar-order`}>
                    {" "}Minar /{" "}
                </NavLink>
                <span>{`${FinalData.title}`}</span>
            </section>

            <section>
                <div className={`${style.minar} flex max-width`}>
                    <div className={style.img_zoom}>
                        <InnerImageZoom
                            src={FinalData.img}
                            zoomSrc={FinalData.img}
                            zoomPreload={true}
                            width="250px"
                            zoomType="hover"
                            zoomScale={4}
                            className="animate__zoomIn animate__animated"
                        />
                    </div>

                    <div
                        className={`${style.minar_feet_contain} flex animate__zoomIn animate__animated`}
                    >
                        <h1>{FinalData.title}</h1>
                        <div className="hr"></div>

                        <p>
                            {Array.isArray(FinalData.description) &&
                                FinalData.description.map((item, index) => (
                                    <span
                                        key={index}
                                        style={{ color: "black", fontSize: "18px" }}
                                    >
                                        {item.route ? (
                                            <NavLink
                                                to={item.route}
                                                className="text-blue-600 hover:underline"
                                            >
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

                        <NavLink to="/inquiry">
                            <button className={`green_btn  flex`}>
                                <span>Send Inquiry</span>
                                <span>
                                    {" "}
                                    <ChevronRight size={20} className=" btn_show  btn_high" />
                                </span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </section>
    );
}
export default FEET_2;





