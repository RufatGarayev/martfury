// importing icons
import { BsStar, BsCameraVideo } from 'react-icons/bs';
import { GiMailShirt, GiBedLamp, GiHealthPotion, GiCutDiamond, GiBabyBottle } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BiTennisBall, BiBook, BiLabel } from 'react-icons/bi';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';
import { RiToolsFill } from 'react-icons/ri';

// categories data types
interface ICategoriesDataTypes {
    id: number;
    title: string;
    icon: JSX.Element;
    submenuTitle?: string;
    submenuTitle2?: string;
    submenu?: {
        id: number;
        title: string;
        category: string;
    }[];
}

// CategoriesData
export const CategoriesData: ICategoriesDataTypes[] = [
    { id: 1, title: "Hot Promotions", icon: <BsStar /> },
    {
        id: 2,
        title: "Consumer Electronic",
        icon: <BsCameraVideo />,
        submenuTitle: "Electronic",
        submenuTitle2: "Accessories & Parts",
        submenu: [
            { id: 1, title: "Home, Audio, Theathers", category: "electronic" },
            { id: 2, title: "Tv & Videos", category: "electronic" },
            { id: 3, title: "Camera, Photos & Videos", category: "electronic" },
            { id: 4, title: "Cellphones & Accessories", category: "electronic" },
            { id: 5, title: "Headphones", category: "electronic" },
            { id: 6, title: "Videosgames", category: "electronic" },
            { id: 7, title: "Wireless Speakers", category: "electronic" },
            { id: 8, title: "Office Electronic", category: "electronic" },
            { id: 9, title: "Digital Cables", category: "accessoriesAndParts" },
            { id: 10, title: "Audio & Video Cables", category: "accessoriesAndParts" },
            { id: 11, title: "Batteries", category: "accessoriesAndParts" }
        ]
    },
    { id: 3, title: "Clothing & Apparel", icon: <GiMailShirt /> },
    { id: 4, title: "Home, Garden & Kitchen", icon: <GiBedLamp /> },
    { id: 5, title: "Health & Beauty", icon: <GiHealthPotion /> },
    { id: 6, title: "Yewelry & Watches", icon: <GiCutDiamond /> },
    {
        id: 7,
        title: "Computer & Technology",
        icon: <HiOutlineDesktopComputer />,
        submenuTitle: "Computer & Technologies",
        submenu: [
            { id: 1, title: "Computer & Tablets", category: "computerAndTechnologies" },
            { id: 2, title: "Laptop", category: "computerAndTechnologies" },
            { id: 3, title: "Monitor", category: "computerAndTechnologies" },
            { id: 4, title: "Networking", category: "computerAndTechnologies" },
            { id: 5, title: "Drive & Storages", category: "computerAndTechnologies" },
            { id: 6, title: "Computer Components", category: "computerAndTechnologies" },
            { id: 7, title: "Security & Protection", category: "computerAndTechnologies" },
            { id: 8, title: "Accessories", category: "computerAndTechnologies" }
        ]
    },
    { id: 8, title: "Babies & Moms", icon: <GiBabyBottle /> },
    { id: 9, title: "Sport & Outdoor", icon: <BiTennisBall /> },
    { id: 10, title: "Phones & Accessories", icon: <MdPhoneAndroid /> },
    { id: 11, title: "Books & Office", icon: <BiBook /> },
    { id: 12, title: "Cars & Motocycles", icon: <FaCarSide /> },
    { id: 13, title: "Home Improments", icon: <RiToolsFill /> },
    { id: 14, title: "Vouchers & Services", icon: <BiLabel /> },
];