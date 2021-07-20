import ChairsImg from '../../../assets/img/home-ads/chairs.jpeg';
import ChargerImg from '../../../assets/img/home-ads/charger.jpeg';
import SpeakerImg from '../../../assets/img/home-ads/speaker.jpeg';

interface IAdsData1 {
    id: number;
    img: string;
}

export const AdsData1: IAdsData1[] = [
    {id: 1, img: SpeakerImg},
    {id: 2, img: ChairsImg},
    {id: 3, img: ChargerImg}
];