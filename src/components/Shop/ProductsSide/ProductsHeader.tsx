import React from 'react';

const ProductsHeader: React.FC = () => {
    return (
        <div className="products-header d-flex">
            {/* ======= products-found ======= */}
            <div className="products-found d-flex align-items-center">
                <span>8</span>
                <p className="m-0">Products found</p>
            </div>
            {/* ======= sorting ======= */}
            <div className="sorting">
                <label className="m-0">SORT BY:</label>
                <select>
                    <option value="default">Default</option>
                    <option value="latest">Latest</option>
                    <option value="lowPrice">Price (Low to High)</option>
                    <option value="highPrice">Price (High to Low)</option>
                </select>
            </div>
        </div>
    )
}

export default ProductsHeader;