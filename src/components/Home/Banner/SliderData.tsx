import SlideImg1 from '../../../assets/img/home-banner/slider/slide1.jpeg';
import SlideImg2 from '../../../assets/img/home-banner/slider/slide2.jpeg';
import SlideImg3 from '../../../assets/img/home-banner/slider/slide3.jpeg';

interface ISliderDataTypes {
    id: number;
    img: string;
}

export const SliderData: ISliderDataTypes[] = [
    { id: 1, img: SlideImg1 },
    { id: 2, img: SlideImg2 },
    { id: 3, img: SlideImg3 }
];