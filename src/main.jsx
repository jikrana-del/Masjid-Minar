import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/NavBar_Component/About.jsx';
import Logo from './components/NavBar_Component/Logo.jsx';
import Work from './components/NavBar_Component/Work_Component/Work.jsx';
import Produces from './components/Product_component/Product.jsx';
import Contact from './components/NavBar_Component/Contact.jsx';
import Inquiry from './components/NavBar_Component/Inquiry.jsx';
import Work_Viedos from './components/NavBar_Component/Work_Component/Work_Viedos.jsx';
import Gumbad from './components/Product_component/Gumbad.jsx';
import Marble_minar from './components/Product_component/Marble_Minar_components/Marble_minar.jsx'
import Minar_gallery from './components/Product_component/Gallery_component/Minar_gallery.jsx';
import Minar from './components/Product_component/Minar_component/Minar.jsx'
import Parapet_jali from './components/Product_component/Parapet_jali_components/Parapet_jali.jsx'
import RCC_minar from './components/Product_component/RCC_Mimber_Component/RCC_minar.jsx'
import FEET_2 from './components/Product_component/Minar_component/MinarSize.jsx';
import { Provider } from 'react-redux';
import DataStore from './Store/Store.js'
import Blog from './components/Product_component/Gallery_component/Blog.jsx';
import Parapet_Jali_Detaill from './components/Product_component/Parapet_jali_components/Parapet_Jali_Detail.jsx'
import Best_Manufacturer from './components/Product_component/Gallery_component/Best_Manufacturer.jsx';
import Masjid_Minar from './components/Product_component/Minar_component/Masjid_Minar.jsx';
import Gallery_Datail from './components/Product_component/Gallery_component/Gallery_Datail.jsx';
import Marble_Minar_Detail from './components/Product_component/Marble_Minar_components/Marble_Minar_Datali.jsx'
import Parapet_Jali_order from './components/Product_component/Parapet_jali_components/Patapet_Jali_order.jsx'
import Marble_Mimber_order from './components/Product_component/Marble_Minar_components/Marble_Mimber_order.jsx';
import RCC_Mimber_order from './components/Product_component/RCC_Mimber_Component/RCC_Mimber_order.jsx';
import Musalla_Tiles from './components/Product_component/Musalla_Tiles_component/Musalla_Tiles.jsx';
import Musalla_Tiles_order from './components/Product_component/Musalla_Tiles_component/Musalla_Tiles_order.jsx';



createRoot(document.getElementById('root')).render(
  <Provider store={DataStore}>
    <StrictMode>
      <BrowserRouter basename={import.meta.env.PROD ? "/Masjid-Minar/" : ""}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Logo />} />
            <Route path="about-top-masjid-minar-company" element={<About />} />
            <Route path="minar-design-gallery" element={<Work />} />
            <Route path="products-masjid-minar" element={<Produces />} />
            <Route path="inquiry" element={<Inquiry />} />
            <Route path="contact" element={<Contact />} />
            <Route path="connect" element={<Contact />} />
            <Route path="video-gallery" element={<Work_Viedos />} />
            <Route path="product">
              <Route path="minar_gallery" element={<Minar_gallery />} />
              <Route path="rcc-minar" element={<RCC_minar />} />
              <Route path="gumbad" element={<Gumbad />} />
              <Route path="masjid-rcc-minar" element={<Minar />} />
              <Route path="parapet_jali" element={<Parapet_jali />} />
              <Route path="minar/:feet" element={<FEET_2 />} />
              <Route path="parapet-jali/:slug" element={<Parapet_Jali_Detaill />} />
              <Route path="marble/:name" element={<Marble_Minar_Detail />} />
              <Route path="gallery/:title" element={<Gallery_Datail />} />
              <Route path="musalla-tiles" element={<Musalla_Tiles />} />
              <Route path="marble_minar" element={<Marble_minar />} />
            </Route>
            <Route path="product-category">
              <Route path="minars/:minar" element={<Masjid_Minar />} />
              <Route path="parapet/:parapet" element={<Parapet_Jali_order />} />
              <Route path="Marbles/:Marble" element={<Marble_Mimber_order />} />
              <Route path="Rcc/:rcc" element={<RCC_Mimber_order />} />
              <Route path="Musalla/:musalla" element={<Musalla_Tiles_order />} />
            </Route>
            <Route path="category/:blog" element={<Blog />} />
            <Route path="best-masjid-minar-manufacture" element={<Best_Manufacturer />} />
            <Route path="*" element={<Logo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
)





