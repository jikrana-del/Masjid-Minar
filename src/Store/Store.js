import { configureStore } from '@reduxjs/toolkit'
import { AllGalleryDataSlice } from './All_Gallery_Data_Slice';
import { MinarDataSlice } from './All_minar_size_data_Slice';
import { MinarGallerySlice } from './Gallery_img_Data_Slice';
import { All_parapet_jali_slice } from './All_Parapet_jali_Data_Slice';
import { All_Marble_Minar_Slice } from './All_Marble_Minar_Data_Slice';
import { MinarImgSlice } from './Minar_img_Data_Slice';
import { ParepetJaliImgSlice } from './ParapetJali_img_Data_Slice';
import { MarbleMimberImgSlice } from './Marble_Mimber_img_Data_Slice';
import { RccImgDataSlice } from './RCC_Img_Data_Slice';
import { MusallaImgSlice } from './Musalla_Tiles_img_Data_Slice';


const DataStore = configureStore({
    reducer: {
        AllMinarData: MinarDataSlice.reducer,
        GalleryData: MinarGallerySlice.reducer,
        AllGalleryData: AllGalleryDataSlice.reducer,
        AllParapetJali: All_parapet_jali_slice.reducer,
        AllMarbleMinarData :All_Marble_Minar_Slice.reducer,
        MinarImgData:MinarImgSlice.reducer,
        ParapetJAliImgData:ParepetJaliImgSlice.reducer,
        MarbleMinarImgData:MarbleMimberImgSlice.reducer,
        RccMimberImgData:RccImgDataSlice.reducer,
        MusallaImgData:MusallaImgSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default DataStore;
