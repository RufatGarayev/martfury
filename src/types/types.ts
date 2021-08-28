// header
export interface INavMenuDataTypes {
    id: number;
    title: string;
    href: string;
    class: string;
};

export interface IMonetaryUnitDataTypes {
    id: number;
    title: string;
    icon: string;
};

export interface ILanguageDataTypes {
    id: number;
    title: string;
    img: string;
};

export interface IActionDataTypes {
    id: number;
    href: string;
    sup: number;
    icon: JSX.Element;
    class: string;
    dropdownContent?: JSX.Element;
    func?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

// categories list
export interface ICategoriesListDataTypes {
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
};

// owl-carousel options
export interface IOwlCarouselOptions {
    margin: number;
    loop: boolean;
    dots: boolean;
    responsive: {
        0: {
            items: number;
        },
        500: {
            items: number;
        },
        768: {
            items: number;
        },
        1000: {
            items: number;
        },
        1400: {
            items: number;
        }
    }
};

// owl-carousel options for about > awards
export interface IOwlCarouselOptionsAwards {
    margin: number;
    loop: boolean;
    dots: boolean;
    responsive: {
        0: {
            items: number;
        },
        300: {
            items: number;
        },
        500: {
            items: number;
        },
        768: {
            items: number;
        },
        1200: {
            items: number;
        }
    }
};

// home > ads
export interface IAdsData1 {
    id: number;
    img: string;
};

// home > advantages
export interface IAdvantagesDataTypes {
    id: number;
    icon: JSX.Element;
    title: string;
    paragraph: string;
};

// home > banner
export interface ISliderDataTypes {
    id: number;
    img: string;
};

export interface IBannerRightDataTypes {
    id: number;
    img: string;
};

// home > categories
export interface IButtonsAndLink {
    id: number;
    href: string;
    title: string;
};

// home > section-header
export interface ISectionHeaderProps {
    title: string;
};

// home > top categories
export interface ITopCategoriesData {
    id: number;
    title: string;
    img: string;
};

// home > download-app
export interface ISmallImages {
    id: number;
    img: string;
};

// social media
export interface ISocialMedia {
    id: number;
    href: string;
    icon: JSX.Element;
    class: string;
};

// react image-gallery
export interface IReactImgGalleryOptions {
    showPlayButton: boolean;
    showFullscreenButton: boolean;
    autoPlay: boolean;
};

export interface IReactImgGalleryimages {
    original: any;
    thumbnail: any;
}

// product-details > tab list
export interface ITabList {
    id: number;
    title: string;
    reviewCount?: number;
};

// about > team
export interface ITeam {
    id: number;
    img: string;
    name: string;
    position: string;
    twitter: string;
    facebook: string;
    linkedin: string;
};

// about > team bg img
export interface ITeamBgImgStyle {
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
    backgroundRepeat: string;
    height: string;
};

// about > awards
export interface IAwards {
    id: number;
    img: string;
    class: string;
};

// product
export interface IProducts {
    id: number;
    img: string;
    title: string;
    price: number;
    label: string;
    rating: string;
    brand: string;
    category: string;
    hasDiscount: boolean;
    isNew: boolean;
    count: number;
    isInCart: boolean;
    isInWishlist: boolean;
    isInCompare: boolean;
    previousPrice?: number;
};

export interface IProductProps {
    product: IProducts;
};

// shop > brands section
export interface IBrandsSection {
    id: number;
    img: string;
    link: string;
};

// shop > filter > brands
export interface IBrands {
    id: number;
    title: string;
    value: string;
};

// shop > range-slider
export interface RangeSliderProps {
    min: number;
    max: number;
    onChange: Function;
};

// shop > pagination
export interface IPaginationProps {
    pages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

// contact items
export interface IContactItems {
    id: number;
    title: string;
    content: JSX.Element;
};

// footer bottom
export interface IPayment {
    id: number;
    img: string;
};

// footer links
export interface ILinks {
    id: number;
    title: string;
    links: {
        id: number;
        title: string;
        href: string;
    }[];
};

// shopping cart
export interface ICartProps {
    cart: any;
};

// product reducer
export interface IProductReducerState {
    products: IProducts[];
    searchedProducts: IProducts[];
};

// primary reducer
export interface IPrimaryReducerState {
    title: string;
    showSidebarCategories: boolean;
    showSidebarMenu: boolean;
    isLoading: boolean;
    showSearchArea: boolean;
    showOrHideDropdownCart: boolean;
    showSidebarFilter: boolean;
};