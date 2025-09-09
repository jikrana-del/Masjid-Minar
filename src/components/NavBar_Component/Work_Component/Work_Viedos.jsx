const src = ["https://www.youtube.com/embed/hnsx9ml83xg?si=Qu8F9yzKAeZD_zWp", "https://www.youtube.com/embed/-Iz2H2baF3c?si=L68Fw0UhesR3k6e-", "https://www.youtube.com/embed/8uro6EDoX2Q?si=mt1kKL0SdeEH1jI0", "https://www.youtube.com/embed/uLGKOxh2hI4?si=rFGymVUIRCE2wfGf"

]
function Work_Viedos() {
  return (
    <>
      <section className='max-width flex animate__zoomIn animate__animated' style={{ flexWrap: "wrap", gap: "30px", padding: "20px", margin: "50px auto" }}>

        {src.map((src, idx) => {
          return (
            <iframe
              key={idx}
              width="320"
              height="315"
              src={src}
              style={{ borderRadius: '10px' }}
              className='animate__zoomIn animate__animated'
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          )
        })}
      </section>

    </>
  )
}

export default Work_Viedos