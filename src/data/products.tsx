export interface IProducts {
    id: number;
    img: string;
    title: string;
    price: number;
    previousPrice?: number;
    label: string;
    rating: string;
    category: string;
    hasDiscount: boolean;
    isNew: boolean;
    count: number;
    isInCart: boolean;
    isInWishlist: boolean;
    isInCompare: boolean;
}

export const products: IProducts[] = [
    {
        id: 1,
        img: "all-books/artificial-intelligence.jpg",
        title: "Artificial Intelligence",
        price: 12.00,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
        isInWishlist: false,
        isInCompare: false
    },
    {
        id: 2,
        img: "all-books/country.jpg",
        title: "Country",
        price: 11.00,
        label: "",
        rating: "★★★★★",
        category: "Other",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
        isInWishlist: false,
        isInCompare: false
    },
    {
        id: 3,
        img: "all-books/doctor-who.jpg",
        title: "Doctor Who",
        price: 14.00,
        label: "New",
        rating: "★★★★★",
        category: "New Releases",
        hasDiscount: false,
        isNew: true,
        count: 1,
        isInCart: false,
        isInWishlist: false,
        isInCompare: false

    },
    {
        id: 4,
        img: "all-books/gulliver's-travels.jpg",
        title: "Gulliver's Travels",
        price: 4.00,
        label: "",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
        isInWishlist: false,
        isInCompare: false
    },
    {
        id: 5,
        img: "all-books/les-miserables.jpg",
        title: "Les Miserables",
        previousPrice: 20.00,
        price: 17.00,
        label: "Sale 15%",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: true,
        isNew: false,
        count: 1,
        isInCart: false,
        isInWishlist: false,
        isInCompare: false
    },
    {
        id: 6,
        img: "all-books/nineteen-eighty-four.jpg",
        title: "1984",
        price: 9.00,
        label: "",
        rating: "★★★★★",
        category: "Best Seller",
        hasDiscount: false,
        isNew: false,
        count: 1,
        isInCart: false,
        isInWishlist: false,
        isInCompare: false
    }
];