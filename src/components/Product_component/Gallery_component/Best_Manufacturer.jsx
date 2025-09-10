import { NavLink } from 'react-router-dom'
import style from '../../../css/Minar.module.css'
import best_img from '../../../assets/mosque-minar-all2.jpg'
function Best_Manufacturer() {
    return (
        <>
            <section className='max-width'>
                <section className={`${style.best_section}`}>
                    <h2>Haramain Minar – Best Masjid Minar Manufacturer.</h2>
                    <p>
                        <NavLink to='/category/:blog'> by valuda | </NavLink>
                        <span>Feb 17, 2022 | </span>
                        <span>0 comments </span>
                    </p>
                    <img src={best_img} alt="" />
                    <center>Aman minar-mosque-minar-all2</center>
                    <p><strong>Harmain Traders </strong> is a Leading Manufacturer of <strong>All types of RCC Readymade masjid Minar , Masjid Gumbad, Masjid Mimber, Mehrab (Qibla) </strong> and <strong> Masjid Elevation items,</strong> Etc. they combined persian and Arabic architectural ideas based on an arcuate system of construction with indian craft they are skilled in manufacturing and supplying premium quality <strong>Gumbad </strong>that is Avaliabe in many designs, color, and finishes.</p>
                    {/* <br/> */}
                    <p><strong>Aman Minar</strong>  uses superior quality reinforced concrete cement and novel techniques by the trending designs of the market. It is used for setting up over the dome of mosques to increase their religious values and impressive looks. Furthermore, we offer them at the most competitive prices to the clients. </p>
                    <h3>All Masjid Products Provided by Harmain Traders.</h3>
                    <p>Aman Minar ( Product of Harmain Traders) offers Variety of All Type of masjid Products including MasJid Minar, Masjid Gumbad, All Type of Marble Products, RCC Products , Parapet Jali ( Parapet Boundary Wall ), Etc. Provides Strong and Quality Material with Best Price. provide Service All Over India.</p>
                </section>
                {/* from */}
                <form className={`${style.form_section} flex`}>
                    <h3>Submit a Comment </h3>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <textarea className={style.checkbox} placeholder='Comment*' /> <br />
                    <input className={style.text_input} type="text" placeholder='Name*' /><br />
                    <input className={style.text_input} type="text" placeholder='Email*' /><br />
                    <input className={style.text_input} type="text" placeholder='Website' /><br />
                    <label className='flex'>
                        <input type="checkbox" name="" id="" />
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                    <div style={{ width: "100%", textAlign: "end" }}>
                        <button type='submit'>Submit Comment</button>
                    </div>

                </form>

            </section>
        </>
    )
}

export default Best_Manufacturer