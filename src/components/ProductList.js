import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <ul className="row product-list">
            <li className="col-3">
                <ProductItem title="Hasan" description="la lal lal la" />
            </li>
            <li className="col-3">
                <ProductItem title="Asan" description="la lal lal la" />
            </li>
            <li className="col-3">
                <ProductItem title="Masan" description="la lal lal la" />
            </li>
            <li className="col-3">
                <ProductItem title="Ali" description="la lal lal la" />
            </li>
        </ul>
    );
};

export default ProductList;