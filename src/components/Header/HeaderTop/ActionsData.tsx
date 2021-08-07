import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface IActionDataTypes {
    id: number;
    href: string;
    icon: JSX.Element;
    class: string;
}

export const ActionsData: IActionDataTypes[] = [
    { id: 1, href: "/compare", icon: <FiBarChart2 />, class: "first-link"},
    { id: 2, href: "/wishlist", icon: <BsHeart />, class: "second-link"},
    { id: 3, href: "/cart", icon: <AiOutlineShoppingCart />, class: "third-link"}
];