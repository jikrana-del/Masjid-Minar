import React from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
function Blog() {
  const { blog } = useParams();
const navigate = useNavigate();
  return (
    <>
     
      <section className="blogContainer animate__backInUp animate__animated ">

        {/* Cover Image */}


        <NavLink to='/best-masjid-minar-manufacture' className="blogTitle">
          Haramain Minar – Best Masjid Minar Manufacturer
        </NavLink>

        <h6 className="blogMeta">
          by <span className="author">valuda</span> | Feb 17, 2022 | Blog
        </h6>

        <p className="blogText">
          Aman minar-mosque-minar-all2 Harmain Traders is a Leading Manufacturer of all types of RCC
          Readymade Masjid Minar, Masjid Gumbad, Masjid Mimbar, Mehrab (Qibla), and Masjid Elevation Items, etc.
          They combined Persian and Arabic architectural ideas based on an arcuate design, creating
          unique and beautiful Islamic structures.
        </p>

        <div className="backBtnWrapper">
          <button onClick={()=> navigate(-1)} className="backBtn" style={{color:"#ffffffff"}} >
            <FaArrowLeftLong /> &nbsp;    Back to Gallery
          </button>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .blogContainer {
          max-width: 800px;
          margin: 40px auto;
          padding: 24px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }
  a.blogTitle {
  font-size: 24px;
  font-weight: bold;
  color: #0077cc !important;   /* force override */
  text-decoration: underline !important;
  margin-bottom: 10px;
  display: inline-block;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

a.blogTitle:hover {
  color: #005fa3 !important;
  text-decoration: none !important;
  cursor: pointer;
}


        .blogMeta {
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }
        .author {
          font-weight: 600;
          color: #333;
        }
        .blogText {
          font-size: 16px;
          line-height: 1.6;
          color: #444;
          margin-bottom: 30px;
        }
        .backBtnWrapper {
          display: flex;
          justify-content: flex-start;
        }
        .backBtn {
          background: linear-gradient(135deg, #001c1e, #055d65, #25d8fc, #055d65, #001c1e);
    padding: 14px 20px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.35s ease;
    /* thoda fast transition */
     color: #0077cc ;
    box-shadow: 0 6px 18px rgba(8, 148, 180, 0.45);
   
        }
        .backBtn:hover {
          background: linear-gradient(135deg, #001c1e, #055d65, #25d8fc, #055d65, #001c1e);
        transform: translateY(-3px) scale(1.04);
        box-shadow: 0 10px 25px rgba(125, 231, 255, 0.5);
        }
       
      `}</style>
    </>
  )
}

export default Blog
