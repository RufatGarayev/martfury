import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi';

function Icons(props: {name: string}) {
    switch (props.name.toLowerCase()) {
        case "chart":
           return <FiBarChart2 {...props} />;
        case "heart":
            return <BsHeart {...props} />
        case "shopping":
            return <AiOutlineShoppingCart {...props} />
        case "user":
            return <HiOutlineUser {...props} />

        default:
            break;
    }
}

export {Icons};