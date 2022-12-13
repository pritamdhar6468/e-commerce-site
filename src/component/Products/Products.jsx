import React,{ useState }  from 'react'
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';


const Products = () => {
    const [MenuProducts, setMenuProducts] = useState(ProductsData);
    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li>all</li>
                    <li>skin care</li>
                    <li>conditioner</li>
                    <li>foundation</li>
                </ul>

                <div className={css.list}>
                    {
                        MenuProducts.map((Products, i) => (
                            <div className={css.Products}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{Products.name}</span>
                                        <span>{Products.detail}</span>
                                    </div>
                                    <span>{Products.price}$</span>
                                    <div>shop now</div>
                                </div>
                                <img src={Products.img} alt="" className="img-p" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default Products;