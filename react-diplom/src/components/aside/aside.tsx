import { faBookmark, faFireFlameCurved, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import AsideStyle from "./aside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aside = ()=>{
    return(
    <aside className={AsideStyle.asideWrap}>
            <div className={AsideStyle.titleWrap}>
                 <h1 className={AsideStyle.mainTitle}>Pix</h1><span className={AsideStyle.mainTitle}>ema</span>
            </div>

            <div className={AsideStyle.asideListWrap}>
                    <div className={AsideStyle.asideNav}>
                        <ul className={AsideStyle.asideNavList}>
                            <li className={AsideStyle.asideNavItem}><FontAwesomeIcon className={AsideStyle.asideIcosn} icon={faHouse} />Home</li>
                            <li className={AsideStyle.asideNavItem}><FontAwesomeIcon className={AsideStyle.asideIcosn} icon={faFireFlameCurved} />Trends</li>
                            <li className={AsideStyle.asideNavItem}><FontAwesomeIcon className={AsideStyle.asideIcosn} icon={faBookmark} />Favorities</li>
                            <li className={AsideStyle.asideNavItem}><FontAwesomeIcon className={AsideStyle.asideIcosn} icon={faGear} />Settings</li>
                        </ul>
                    </div>

                    <div><p className={AsideStyle.asideNavItem}>All Rights Reserved</p></div>
            </div>
    </aside>
    )
}
export default Aside