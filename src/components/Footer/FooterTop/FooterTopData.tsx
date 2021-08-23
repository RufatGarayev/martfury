import { ILinks } from "../../../types/types";

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