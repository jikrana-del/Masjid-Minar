
import { useState } from 'react'
import style from '../../../css/Work.module.css'
import { X } from "lucide-react";
import { useEffect } from 'react';
function Work() {


  const [selectedImg, setSelectedImg] = useState(null);
  console.log(selectedImg);

  const Buttons = ['Minar Work', 'Gumbad Work', 'Marble Work', 'Parapet Jali', 'RCC Mimber'];

  const MinarImg = [
    "work-1.jpeg", "work-2.png", "work-3.png", "work-4.png", "work-5.png",
    "work-6.png", "work-7.png", "work-8.png", "work-9.png", "work-10.png",
    "work-11.png", "work-12.png", "work-13.png", "work-14.png", "work-15.png",
    "work-31.png", "work-17.png", "work-18.png", "work-20.png",
    "work-21.png", "work-22.png", "work-33.png", "work-24.png", "work-25.png",
    "work-26.png", "work-27.png", "work-34.png", "work-29.png", "work-30.png",
    "work-35.png", "work-38.png", "work-37.png"
  ];

  const GumbadImg = [
    'gumbad-1.jpeg', 'gumbad-2.jpeg ', 'gumbad-3.jpeg', 'gumbad-4.jpeg',
    'gumbad-5.png', 'gumbad-6.png', 'gumbad-7.png', 'gumbad-8.png', 'gumbad-9.png',
    'gumbad-10.png', 'gumbad-11.png', 'gumbad-12.png', 'gumbad-13.png', 'gumbad-14.png',
    'gumbad-15.png'
  ];

  const MarbleImg = [
    'marbal-1.jpeg', 'marbal-2.jpeg', 'marbal-3.jpeg', 'marbal-4.jpeg',
    'marbal-5.jpeg', 'marbal-6.png', 'marbal-7.png', 'marbal-8.png'
  ];

  const ParpetJaliImg = [
    'Parapet-2.jpeg', 'Parapet-4.png',
    'Parapet-5.png', 'Parapet-6.png', 'Parapet-7.png', 'Parapet-8.png',
    'Parapet-9.png', 'Parapet-10.png', 'Parapet-1.jpeg'

  ];

  const RCCImg = [
    'RCC-1.jpeg', 'RCC-2.jpeg'
  ];


  const MinarImgName = ['minar', '5 minar', 'beautiful minar', 'gumbad & minar', 'led-minar', 'light-minar', 'masjid-minar-3', 'minar and Gumbad', 'masjid-minar-1', 'minar & Gumbad', 'minar & parapetjali', 'minar', 'minar-6', 'minar-7', 'minar-8', 'small-minar', 'minar-11', 'minar-12', 'minar-15', 'minar-16', 'minar-17', 'shandar-minars', 'minar-18', 'minar-20', 'minars', 'minares', 'shandar-minar', 'very-beautiful-minars', 'strong-minar', 'simple-minar', 'gumbad-minar', 'big-minar']
  const GumbadImgName = ['gumbad-1', 'gumbad-2', 'gumbad-3', 'gumbad-4', 'big-gumbad', 'entry-gumbad', 'gumbad & minar', 'gumbad', 'gumbad-minar', 'masjid-minar-1', 'minar & gumbad', 'minar & gumbad', 'only-gumbad', 'simple-gumbad', 'strong-minar']
const  MarbleImgName = ['Gellery-photo','marble-jali-1','marble-jali-2','marble-mehrab-design-1','marble-mehrab-design-2','marble-mehrab & marble-mimbar','marble-mehrab-1','marble mehrab-mimber']
const ParapetJaliImgName = ['shahi-boundary-jali','boundary','boundaryWall','dargah-jali','minar & parapetjali','parapet-jali','parapet-jali-medium','gubar-boundary-wall','parapet-jali']
const RCCImgName = ['RCC-mimber 2','RCC Mimber']





const renderImages = (images ,imgName = name) => (
    images.map((img, idx) => (
      <div key={idx} className={style.images} style={{ position: "relative" }}>
        <img
          src={`/images/${img}`}
          alt={`work-${idx + 1}`}
          width="200px"
          height="210px"
          style={{ cursor: "pointer", borderRadius: "6px", overflow:"hidden"}}
          onClick={() => setSelectedImg(img)}
        />
        <div className={style.img_title}>
          <center>{imgName[idx]}</center>

        </div>
      </div>

    ))
  );
  useEffect(() => {
    if (selectedImg) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [selectedImg]);

  return (
    <section className='animate__zoomIn animate__animated' style={{ position: "relative" }} key={Math.random()}>
      {!selectedImg ? (
        <>
          <section className={`${style.buttons_section} flex`}>
            {Buttons.map((btn, idx) => (
              <div key={idx} className='animate__bounceInDown animate__animated'>
                <button><a href={`#${btn}`}>{btn}</a></button>
              </div>
            ))}
          </section>

          <section className={`${style.img_section} flex max-width`} id={Buttons[0]}>
            {renderImages(MinarImg ,MinarImgName)}
          </section>

          <section className={`${style.img_section} flex max-width`} id={Buttons[1]}>
            {renderImages(GumbadImg,GumbadImgName)}
          </section>

          <section className={`${style.img_section} flex max-width`} id={Buttons[2]}>
            {renderImages(MarbleImg ,MarbleImgName)}
          </section>

          <section className={`${style.img_section} flex max-width`} id={Buttons[3]}>
            {renderImages(ParpetJaliImg,ParapetJaliImgName)}
          </section>

          <section className={`${style.img_section} flex max-width`} id={Buttons[4]}>
            {renderImages(RCCImg,RCCImgName)}
          </section>
        </>
      ) : (
        <div
          style={{
            position: 'sticky',
            top: "0",
            width: "90vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "99999",
            margin: "30px auto",
            left: "0"
          }}
        >

          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "5px",


            }}>
            <img src={`/images/${selectedImg}`} alt="" style={{ borderRadius: "5px" }} width='100%' />
            <div className={style.close_icon} onClick={() => setSelectedImg(null)} >
              <X size={30} />
            </div>
          </div>
        </div>

      )}
    </section>
  )
}

export default Work;
