import style from '../css/Header.module.css'
function Header() {
    return (
        <section className={style.header_section}>
            <header>
                <div className={style.inner_header}>
                    <marquee>Masjid Minar Manufacturer | Masjid Gumbad | Masjid Marble Products | Wuzu Stand | RCC Minar | Readymade Masjid Minar
                    </marquee>
                </div>
            </header>
        </section>
    )
}
export default Header