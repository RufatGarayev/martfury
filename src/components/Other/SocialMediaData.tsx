import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { AiOutlineGooglePlus, AiOutlineInstagram } from 'react-icons/ai';

interface ISocialMedia {
    id: number;
    href: string;
    icon: JSX.Element;
    class: string;
}

export const SocialMediaData: ISocialMedia[] = [
    { id: 1, href: "#/", icon: <TiSocialFacebook />, class: "facebook" },
    { id: 2, href: "#/", icon: <TiSocialTwitter />, class: "twitter" },
    { id: 3, href: "#/", icon: <AiOutlineGooglePlus />, class: "google" },
    { id: 4, href: "#/", icon: <AiOutlineInstagram />, class: "instagram" }
];