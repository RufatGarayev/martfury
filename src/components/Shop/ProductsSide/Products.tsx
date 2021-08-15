import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';

const Products: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <div className="products">
            <div className="row">
                {
                    products.products.map(product => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="item">
                                <ProductCard product={product} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;