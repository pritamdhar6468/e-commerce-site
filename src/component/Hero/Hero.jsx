import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
const Hero=()=>{
    return(
        <div className={css.container}>
              { /*left side*/}
            <div className={css.h_sides}>
                <span className={css.text1}>Skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy collection</span>
                    <span>Seedily say has suitable and boy. Exersize joy man child rejoiced</span>
                </div>

            </div>
            { /*middle side*/}
           <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
           </div>
           { /*right side*/}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>monthly traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>happy customers</span>
                </div>
            </div>
        </div>
    )
}
export default Hero;