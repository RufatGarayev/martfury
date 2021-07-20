export interface IButtonsAndLink {
    id: number;
    href: string;
    title: string;
}

export const ButtonsAndLinkData: IButtonsAndLink[] = [
    { id: 1, href: "#/", title: "New Arrivals" },
    { id: 2, href: "#/", title: "Best Seller" },
    { id: 3, href: "#/", title: "Most Popular" },
    { id: 4, href: "/shop", title: "View All" }
];