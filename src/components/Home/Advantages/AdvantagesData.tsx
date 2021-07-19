import {BiRocket} from 'react-icons/bi';
import {AiOutlineSync} from 'react-icons/ai';
import {GoCreditCard} from 'react-icons/go';
import {ImBubbles3, ImGift} from 'react-icons/im';

interface IAdvantagesDataTypes {
    id: number;
    icon: JSX.Element;
    title: string;
    paragraph: string;
}

export const AdvantagesData: IAdvantagesDataTypes[] = [
    {id: 1, icon: <BiRocket />, title: "Free Delivery", paragraph: "For all oders over $99"},
    {id: 2, icon: <AiOutlineSync />, title: "90 Days Return", paragraph: "If goods have problems"},
    {id: 3, icon: <GoCreditCard />, title: "Secure Payment", paragraph: "100% secure payment"},
    {id: 4, icon: <ImBubbles3 />, title: "24/7 Support", paragraph: "Dedicated support"},
    {id: 5, icon: <ImGift />, title: "Gift Service", paragraph: "Support gift service"}
];