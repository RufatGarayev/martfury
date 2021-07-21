import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineGooglePlus, AiOutlineInstagram } from 'react-icons/ai';

// data types
interface ISocialMedia {
    id: number;
    href: string;
    icon: JSX.Element;
    class: string;
}

interface ILinks {
    id: number;
    title: string;
    links: {
        id: number;
        title: string;
        href: string;
    }[];
}


// social media data
export const SocialMediaData: ISocialMedia[] = [
    { id: 1, href: "#/", icon: <TiSocialFacebook />, class: "facebook" },
    { id: 2, href: "#/", icon: <TiSocialTwitter />, class: "twitter" },
    { id: 3, href: "#/", icon: <AiOutlineGooglePlus />, class: "google" },
    { id: 4, href: "#/", icon: <AiOutlineInstagram />, class: "instagram" }
];

// links data
export const LinksData: ILinks[] = [
    {
        id: 1,
        title: "Quick links",
        links: [
            {id: 1, title: "Policy", href: "#/"},
            {id: 2, title: "Term & Condition", href: "#/"},
            {id: 3, title: "Shipping", href: "#/"},
            {id: 4, title: "Return", href: "#/"},
            {id: 5, title: "FAQs", href: "#/"}
        ]
    },
    {
        id: 2,
        title: "Company",
        links: [
            {id: 1, title: "About Us", href: "/about"},
            {id: 2, title: "Affilate", href: "#/"},
            {id: 3, title: "Career", href: "#/"},
            {id: 4, title: "Contact", href: "/contact"}
        ]
    },
    {
        id: 3,
        title: "Bussiness",
        links: [
            {id: 1, title: "Our Press", href: "#/"},
            {id: 2, title: "Checkout", href: "#/"},
            {id: 3, title: "Shipping", href: "#/"},
            {id: 4, title: "My Account", href: "#/"},
            {id: 5, title: "Shop", href: "#/"}
        ]
    }
];