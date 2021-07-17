import EngImg from '../../../assets/img/language/en.png';
import GerImg from '../../../assets/img/language/germany.png';
import FrImg from '../../../assets/img/language/fr.png';

// Data Types
interface NavMenuDataTypes {
    id: number;
    title: string;
    href: string;
    class: string;
}

interface MonetaryUnitDataTypes {
    id: number;
    title: string;
    icon: string;
}

interface LanguageDataTypes {
    id: number;
    title: string;
    img: string;
}


// NavLinksData
export const NavLinksData: NavMenuDataTypes[] = [
    { id: 1, title: "Home", href: "/", class: "first-li" },
    { id: 2, title: "About", href: "/about", class: "second-li" },
    { id: 3, title: "Shop", href: "/shop", class: "third-li" },
    { id: 4, title: "Contact", href: "/contact", class: "fourth-li" }
];

// MonetaryUnitData
export const MonetaryUnitData: MonetaryUnitDataTypes[] = [
    {id: 1, title: "USD", icon: "$"},
    {id: 2, title: "EURO", icon: "€"},
    {id: 3, title: "GBP", icon: "£"}
];

// LanguageData
export const LanguageData: LanguageDataTypes[] = [
    {id: 1, title: "English", img: EngImg},
    {id: 2, title: "German", img: GerImg},
    {id: 3, title: "French", img: FrImg}
];