import { AiTwotoneMail } from "react-icons/ai";   
import { FaPhoneAlt } from "react-icons/fa";      
import { FaMapMarkerAlt } from "react-icons/fa";  
import style from '../css/Footer.module.css'

function Footer() {
  return (
    <>
      <footer>
        <div className={`${style.footer_section}  flex max-width`}>
          <div>
            <div className={`${style.footer_icon} flex`}>
              <span>  <FaPhoneAlt /></span>
              <strong>Contact Number</strong>
            </div>
            <p>+91 98812 90998 (India)</p>
            <p>+91 98608 36033(India)</p>
          </div>
          <div>
            <div className={`${style.footer_icon} flex`}>
              <span> <AiTwotoneMail /> </span>
              <strong>Email Address</strong>
            </div>
            <p>dauvahanif786@gmail.com</p>
          </div>
          <div>
            <div className={`${style.footer_icon} flex`} style={{ marginRight: "50px", textAlign:"center" }}>
              <span > <FaMapMarkerAlt /> </span>
              <strong>Location</strong>
            </div>
            <p>Western Express Highway Vasai <br /> East - 401208 Mumbai <br /> (Maharashtra-India)</p>
          </div>
         
        </div>
        <div className={style.big_footer}>
    <div className={`${style.small_footer} flex max-width`}>
          <p>&copy; Copyright {new Date().getFullYear()} Harmain Precast Industries. ALL Rights Reserved</p>
          <p>Developed by – Jikrana </p>
    </div>
        </div>
         
      </footer>
    </>
  )
}

export default Footer