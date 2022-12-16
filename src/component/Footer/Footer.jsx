import React from "react";
import Logo from "../../assets/logo.png";
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";
import css from './Footer.module.css';
const Footer =()=>{
    return (
        <div className={css.cFooterWrapper}>
            <hr/>
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo } alt=""/>
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon}/>
                            <span>111 north avenue Orlando, FL 32801</span>
                        </span>

                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon}/>
                            <a href="tel:775-094-0166">775-094-0166</a>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon}/>
                            <a href="pritamdha6568@gmail.com">pritamdha6568@gmail.com</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon}/>
                            Sign In
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon}/>
                            <a href="/about"><p>About Us</p></a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon}/>
                            <p>safety privacy and terms</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright @2022 by amazon,Inc.</span>
                <span>All rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;