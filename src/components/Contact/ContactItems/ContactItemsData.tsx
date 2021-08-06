// contact items text
const contactDirectlyText = (
    <>
        contact@martfury.com
        <br />
        (+004) 912-3548-07
    </>
);

const headQuaterText = (
    <>
        17 Queen St, Southbank, Melbourne
        <br />
        10560, Australia
    </>
);

const workWithUsText = (
    <>
        Send your CV to our email:
        <br />
        career@martfury.com
    </>
);

const customerServiceText = (
    <>
        customercare@martfury.com
        <br />
        (800) 843-2446
    </>
);

const mediaRelationsText = (
    <>
        media@martfury.com
        <br />
        (801) 947-3564
    </>
);

const vendorSupportText = (
    <>
        vendorsupport@martfury.com
        <br />
        (801) 947-3100
    </>
);

// contact items data types
interface IContactItems {
    id: number;
    title: string;
    content: JSX.Element;
}

// contact items data
export const ContactItemsData: IContactItems[] = [
    {
        id: 1,
        title: "Contact Directly",
        content: contactDirectlyText
    },
    {
        id: 2,
        title: "Head Quater",
        content: headQuaterText
    },
    {
        id: 3,
        title: "Work With Us",
        content: workWithUsText
    },
    {
        id: 4,
        title: "Customer Service",
        content: customerServiceText
    },
    {
        id: 5,
        title: "Media Relations",
        content: mediaRelationsText
    },
    {
        id: 6,
        title: "Vendor Support",
        content: vendorSupportText
    }
];