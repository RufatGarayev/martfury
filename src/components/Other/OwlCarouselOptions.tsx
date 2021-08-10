interface IOptions {
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
        1300: {
            items: number;
        }
    }
}

export const Options: IOptions = {
    margin: 20,
    loop: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 2,
        },
        768: {
            items: 4,
        },
        1300: {
            items: 6,
        }
    },
};