// import { NavLink } from 'react-router-dom'
// import { ChevronRight } from "lucide-react";
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/styles.min.css';
// import style from '../../../css/Minar.module.css'



// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// function FEET_2() {
//     const Data = useSelector(store => store.uniqeMinarData)
//     if(!Data){
//         return <center><h1>Not found ........</h1></center>
//     }
//    const { id, img, size, description, title } = Data;
//     const { feet } = useParams();
    
//     return (
//         <section key={id}>
//             <section className={`${style.Header}`}>
//                 <div>{`Home / Minar / ${title}`}</div>
//             </section>
//             <section >
//                 <div className={`${style.minar} flex max-width`}>
//                     <div className={style.img_zoom}>
//                         <InnerImageZoom
//                             src={img}          // normal image
//                             zoomSrc={img} // high-res image for zoom
//                             zoomPreload={true} // zoom image pehle load ho jayegi
//                             width='250px'
//                             zoomType="hover"  // hover ya click use kar sakte ho
//                             zoomScale={4}
//                             className='animate__zoomIn animate__animated'
//                         />
//                     </div>
//                     <div className={`${style.minar_feet_contain} flex animate__fadeInRight animate__animated`}>
//                         <h1>{title}</h1>
//                         <div className='hr'></div>
//                         <p dangerouslySetInnerHTML={{__html:description}}>
                           
//                         </p>
//                         <NavLink to='/inquiry'><button className={`green_btn  flex`} >
//                             <span>Send Inquiry</span>
//                             <span> <ChevronRight size={20} className=' btn_show  btn_high' /></span>
//                         </button>
//                         </NavLink>
//                     </div>
//                 </div>
//             </section>
//         </section>
//     )
// }

// export default FEET_2















import { NavLink } from 'react-router-dom'
import { ChevronRight } from "lucide-react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import style from '../../../css/Minar.module.css'



import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
 

const makeSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')   // spaces → dash
        .replace(/:/g, '')      // remove colon
        .replace(/[^a-z0-9-]/g, ''); // सिर्फ letters, numbers, dash रहने दो
};
function FEET_2() {
    const Data = useSelector(store => store.uniqeMinarData )
    const FinalData = Data && Data.length > 0 ? Data[0] : null;

    console.log(Data);
    
    if (!Data) {
        return <center><h1>Not found ........</h1></center>
    }
    // const { id, img, size, description, title } = Data;
    const { feet } = useParams();

    return (
        <>
       {!Data  ? <center><h1>Data Empty....................</h1></center> :
        <section key={FinalData.id}>
            <section className={`${style.Header}`}>
                        <NavLink to='/'> <span> Home / </span></NavLink>
                        <NavLink to={`/product-category/minars/masjid-minar-order`}> Minar / </NavLink>
                <span>{`${FinalData.title}`}</span>
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
                            <div className={`${style.minar_feet_contain} flex animate__zoomIn animate__animated`}>
                        <h1>{FinalData.title}</h1>
                        <div className='hr'></div>
                         <p>
                                    {Array.isArray(FinalData.description) && FinalData.description.map((item, index) => (
                                <p key={index} style={{display:"inline", fontSize:"18px"}}>
                                  
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
}
        </>
    )
}

export default FEET_2