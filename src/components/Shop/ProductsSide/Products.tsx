import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { IState } from '../../../redux/reducers/productReducer';

const Products: React.FC = () => {
    const products = useSelector<IState, IState["products"]>((state) => state.products);

    return (
        <div className="products">
            <div className="row">
                {
                    products.map(product => (
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