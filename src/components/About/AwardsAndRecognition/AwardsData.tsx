import Award1 from '../../../assets/img/about/awards/award1.png';
import Award2 from '../../../assets/img/about/awards/award2.png';
import Award3 from '../../../assets/img/about/awards/award3.png';
import Award4 from '../../../assets/img/about/awards/award4.png';
import Award5 from '../../../assets/img/about/awards/award5.png';

interface IAwards {
    id: number;
    img: string;
}

export const AwardsData: IAwards[] = [
    { id: 1, img: Award1 },
    { id: 2, img: Award2 },
    { id: 3, img: Award3 },
    { id: 4, img: Award4 },
    { id: 5, img: Award5 }
];