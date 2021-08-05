// importing images
import EngImg from '../../../assets/img/language/en.png';
import GerImg from '../../../assets/img/language/germany.png';
import FrImg from '../../../assets/img/language/fr.png';

// Data Types
interface INavMenuDataTypes {
    id: number;
    title: string;
    href: string;
    class: string;
}

interface IMonetaryUnitDataTypes {
    id: number;
    title: string;
    icon: string;
}

interface ILanguageDataTypes {
    id: number;
    title: string;
    img: string;
}

// NavLinksData
export const NavLinksData: INavMenuDataTypes[] = [
    { id: 1, title: "Home", href: "/", class: "first-li" },
    { id: 2, title: "About", href: "/about", class: "second-li" },
    { id: 3, title: "Shop", href: "/shop", class: "third-li" },
    { id: 4, title: "Contact", href: "/contact", class: "fourth-li" }
];

// MonetaryUnitData
export const MonetaryUnitData: IMonetaryUnitDataTypes[] = [
    { id: 1, title: "USD", icon: "$" },
    { id: 2, title: "EURO", icon: "€" },
    { id: 3, title: "GBP", icon: "£" }
];

// LanguageData
export const LanguageData: ILanguageDataTypes[] = [
    { id: 1, title: "English", img: EngImg },
    { id: 2, title: "German", img: GerImg },
    { id: 3, title: "French", img: FrImg }
];