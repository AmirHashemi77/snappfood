import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.scss'
const Footer = () => {
    return (
        <footer>
            <div className={style.logoAndSocial}>
                <img src="/images/footerLogo.svg" alt="logo" />
                <div className={style.left}>
                    <div className={style.description}>
                        <h2 className={style.title}>اسنپ فود</h2>
                        <p className={style.subtitle}>تجربه سفارش غذا ،  از زودفود تا اسنپ فود</p>
                    </div>
                    <div className={style.socialMedia}>
                        <button className={style.socialItem}><img src="/images/socialMediaIcon/twitter.svg" alt="twitter" /></button>
                        <button className={style.socialItem}><img src="/images/socialMediaIcon/telegram.svg" alt="telegram" /></button>
                        <button className={style.socialItem}><img src="/images/socialMediaIcon/linkdin.svg" alt="linkdin" /></button>
                        <button className={style.socialItem}><img src="/images/socialMediaIcon/instagram.svg" alt="instagram" /></button>
                        <button className={style.socialItem}><img src="/images/socialMediaIcon/aparat.svg" alt="aparat" /></button>
                       
                    </div>
                </div>
            </div>
            <ul className={style.links}>
                <li className={style.linksItem}><Link>درباره اسنپ فود</Link></li>
                <li className={style.linksItem}><Link>همکاری با ما</Link></li>
                <li className={style.linksItem}><Link>وبلاگ</Link></li>
                <li className={style.linksItem}><Link>قوانین سایت</Link></li>
                <li className={style.linksItem}><Link>حریم خصوصی</Link></li>
                <li className={style.linksItem}><Link>ثبت نام فروشندگان</Link></li>
                
            </ul>
            <ul className={style.links}>
                <li className={style.linksItem}><Link>تماس با اسنپ فود</Link></li>
                <li className={style.linksItem}><Link>پرسش های متداول</Link></li>
                <li className={style.linksItem}><Link>ثبت شکایات</Link></li>
                <li className={style.linksItem}><Link>اپلیکیشن</Link></li>
            </ul>
            <div className={style.license}>
                <img className={style.enamad} src="/images/footerImg/enamad.png" alt="enamd" />
                <img src="/images/footerImg/senf.png" alt="senf" />
            </div>
        </footer>
    );
};

export default Footer;