import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Options } from '../../Other/OwlCarouselOptions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';
import { IProducts } from '../../../data/products';

interface IProps {
    product: IProducts;
}

const RelatedProducts: React.FC<IProps> = ({ product }) => {
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;

    const theProducts = products.filter(relatedProduct =>
        relatedProduct.category === product.category && relatedProduct.id !== product.id);

    return (
        <>
            {
                theProducts.length !== 0 ? (
                    <section id="related-products">
                        <div className="container">
                            <div className="related-products-content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="title">
                                            <h3>Related Products</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="related-products-slider">
                                            <OwlCarousel className='owl-theme' {...Options}>
                                                {
                                                    theProducts.map(relatedProduct => (
                                                        <div key={relatedProduct.id} className='item'>
                                                            <ProductCard product={relatedProduct} />
                                                        </div>
                                                    ))
                                                }
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (null)
            }
        </>
    )
}

export default RelatedProducts;