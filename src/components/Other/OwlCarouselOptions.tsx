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
            items: 3,
        },
        1000: {
            items: 4,
        },
        1400: {
            items: 5,
        }
    },
};