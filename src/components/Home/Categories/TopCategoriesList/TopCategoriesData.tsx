import ClothingsImg from '../../../../assets/img/categories/clothings.jpg';
import ComputersImg from '../../../../assets/img/categories/computers.jpg';
import HomeAndKitchenImg from '../../../../assets/img/categories/home-and-kitchen.jpg';
import HealthAndBeautyImg from '../../../../assets/img/categories/health-and-beauty.jpg';
import JewelryAndWatchImg from '../../../../assets/img/categories/jewelry-and-watch.jpg';
import PhonesImg from '../../../../assets/img/categories/phones.jpg';

interface ITopCategoriesData {
    id: number;
    title: string;
    img: string;
}

export const TopCategoriesData: ITopCategoriesData[] = [
    { id: 1, title: "Clothings", img: ClothingsImg },
    { id: 2, title: "Computers", img: ComputersImg },
    { id: 3, title: "Home & Kitchen", img: HomeAndKitchenImg },
    { id: 4, title: "Health & Beauty", img: HealthAndBeautyImg },
    { id: 5, title: "Jewelry & Watch", img: JewelryAndWatchImg },
    { id: 6, title: "Phones", img: PhonesImg }
];