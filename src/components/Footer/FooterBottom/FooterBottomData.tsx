import WesterUnionImg from '../../../assets/img/payment/western-union.png';
import CirrusImg from '../../../assets/img/payment/cirrus.png';
import MasterCardImg from '../../../assets/img/payment/master-card.png';
import SkrillImg from '../../../assets/img/payment/skrill.png';
import VisaImg from '../../../assets/img/payment/visa.png';

interface IPayment {
    id: number;
    img: string;
}

export const PaymentData: IPayment[] = [
    { id: 1, img: WesterUnionImg },
    { id: 2, img: CirrusImg },
    { id: 3, img: MasterCardImg },
    { id: 4, img: SkrillImg },
    { id: 5, img: VisaImg }
];