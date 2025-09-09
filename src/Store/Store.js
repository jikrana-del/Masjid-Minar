import { configureStore } from '@reduxjs/toolkit'
import { uniquMinarDataSlice } from './Uniqe_minar_data';
import { AllGalleryDataSlice } from './All_Gallery_Data_Slice';
import { MinarDataSlice } from './All_minar_size_data_Slice';
import { MinarGallerySlice } from './Gallery_img_Data_Slice';
import { UniqeGalleryDataSlice } from './Uniqe_gallery_Data_Slice';
import { All_parapet_jali_slice } from './All_Parapet_jali_Data_Slice';
import { Uniqe_Parapet_jali_Slice } from './uniqe_Parapet_Jali_slice';
import { All_Marble_Minar_Slice } from './All_Marble_Minar_Data_Slice';
import { UniqeMarbleMinarSlice } from './Uniqe_Marble_Minar_Slice';
import { MinarImgSlice } from './Minar_img_Data_Slice';
import { ParepetJaliImgSlice } from './ParapetJali_img_Data_Slice';
import { MarbleMimberImgSlice } from './Marble_Mimber_img_Data_Slice';
import { RccImgDataSlice } from './RCC_Img_Data_Slice';
import { MusallaImgSlice } from './Musalla_Tiles_img_Data_Slice';


const DataStore = configureStore({
    reducer: {
        AllMinarData: MinarDataSlice.reducer,
        uniqeMinarData: uniquMinarDataSlice.reducer,
        GalleryData: MinarGallerySlice.reducer,
        AllGalleryData: AllGalleryDataSlice.reducer,
        uniqeGalleryData: UniqeGalleryDataSlice.reducer,
        AllParapetJali: All_parapet_jali_slice.reducer,
        uniqeParapetData: Uniqe_Parapet_jali_Slice.reducer,
        AllMarbleMinarData :All_Marble_Minar_Slice.reducer,
        UniqeMarbleMinarData : UniqeMarbleMinarSlice.reducer,
        MinarImgData:MinarImgSlice.reducer,
        ParapetJAliImgData:ParepetJaliImgSlice.reducer,
        MarbleMinarImgData:MarbleMimberImgSlice.reducer,
        RccMimberImgData:RccImgDataSlice.reducer,
        MusallaImgData:MusallaImgSlice.reducer,
    },
})
export default DataStore;