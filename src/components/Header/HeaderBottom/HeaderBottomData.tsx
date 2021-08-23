import EngImg from '../../../assets/img/language/en.png';
import GerImg from '../../../assets/img/language/germany.png';
import FrImg from '../../../assets/img/language/fr.png';
import { INavMenuDataTypes, IMonetaryUnitDataTypes, ILanguageDataTypes } from '../../../types/types';

export const NavLinksData: INavMenuDataTypes[] = [
    { id: 1, title: "Home", href: "/", class: "first-li" },
    { id: 2, title: "About", href: "/about", class: "second-li" },
    { id: 3, title: "Shop", href: "/shop", class: "third-li" },
    { id: 4, title: "Contact", href: "/contact", class: "fourth-li" }
];

export const MonetaryUnitData: IMonetaryUnitDataTypes[] = [
    { id: 1, title: "USD", icon: "$" },
    { id: 2, title: "EURO", icon: "€" },
    { id: 3, title: "GBP", icon: "£" }
];

export const LanguageData: ILanguageDataTypes[] = [
    { id: 1, title: "English", img: EngImg },
    { id: 2, title: "German", img: GerImg },
    { id: 3, title: "French", img: FrImg }
];