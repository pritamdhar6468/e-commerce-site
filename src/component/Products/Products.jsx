import React,{ useState }  from 'react'
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Products = () => {
    const [parent] = useAutoAnimate()
    const [MenuProducts, setMenuProducts] = useState(ProductsData);
    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((Products)=>Products.type === type))
    }
    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={()=>setMenuProducts(ProductsData)}>all</li>
                    <li onClick={()=>filter("skin care")}>skin care</li>
                    <li onClick={()=>filter("conditioner")}>conditioner</li>
                    <li onClick={()=>filter("foundation")}>foundation</li>
                </ul>

                <div className={css.list} ref={parent}>
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