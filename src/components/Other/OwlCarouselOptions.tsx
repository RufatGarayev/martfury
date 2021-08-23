import { IOwlCarouselOptions } from '../../types/types';

export const Options: IOwlCarouselOptions = {
    margin: 20,
    loop: false,
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
            items: 5,
        }
    },
};