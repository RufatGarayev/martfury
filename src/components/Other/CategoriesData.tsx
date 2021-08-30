import { BsCameraVideo } from 'react-icons/bs';
import { GiMailShirt, GiBedLamp, GiHealthPotion, GiCutDiamond, GiBabyBottle } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BiTennisBall, BiBook } from 'react-icons/bi';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';
import { ICategoriesListDataTypes } from '../../types/types';

export const CategoriesData: ICategoriesListDataTypes[] = [
    { id: 1, title: "Clothing & Apparel", icon: <GiMailShirt /> },
    {
        id: 2,
        title: "Consumer Electronics",
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
    { id: 3, title: "Home, Garden & Kitchen", icon: <GiBedLamp /> },
    { id: 4, title: "Health & Beauty", icon: <GiHealthPotion /> },
    { id: 5, title: "Jewelry & Watches", icon: <GiCutDiamond /> },
    {
        id: 6,
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
    { id: 7, title: "Babies & Moms", icon: <GiBabyBottle /> },
    { id: 8, title: "Sport & Outdoor", icon: <BiTennisBall /> },
    { id: 9, title: "Phones & Accessories", icon: <MdPhoneAndroid /> },
    { id: 10, title: "Books & Office", icon: <BiBook /> },
    { id: 11, title: "Cars & Motocycles", icon: <FaCarSide /> },
];