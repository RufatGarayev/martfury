// importing slider images
import SlideImg1 from '../../../assets/img/home-banner/slider/slide1.jpeg';
import SlideImg2 from '../../../assets/img/home-banner/slider/slide2.jpeg';
import SlideImg3 from '../../../assets/img/home-banner/slider/slide3.jpeg';

// importing banner-right images
import Img1 from '../../../assets/img/home-banner/other/img1.jpeg';
import Img2 from '../../../assets/img/home-banner/other/img2.jpeg';


// data types
interface ISliderDataTypes {
    id: number;
    img: string;
}

interface IBannerRightDataTypes {
    id: number;
    img: string;
}


// slider data
export const SliderData: ISliderDataTypes[] = [
    { id: 1, img: SlideImg1 },
    { id: 2, img: SlideImg2 },
    { id: 3, img: SlideImg3 }
];

// banner-right data
export const BannerRightData: IBannerRightDataTypes[] = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 }
];